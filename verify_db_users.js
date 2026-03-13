const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Connecting to database...');
    const userCount = await prisma.user.count();
    console.log(`Connection successful. Total users: ${userCount}`);

    const admins = await prisma.user.findMany({
      where: { email: 'admin@aie.com' }
    });
    console.log(`Found ${admins.length} admin(s) with email admin@aie.com`);

    const users = await prisma.user.findMany({
      where: { email: 'user@aie.com' }
    });
    console.log(`Found ${users.length} user(s) with email user@aie.com`);

    if (admins.length > 0) {
        console.log('Admin user details (safely):', {
            id: admins[0].id,
            email: admins[0].email,
            role: admins[0].role,
            hasPassword: !!admins[0].password
        });
    }

  } catch (error) {
    console.error('Error connecting to database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
