const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function testAuth() {
  const credentials = [
    { email: 'admin@aie.com', password: 'admin313' },
    { email: 'user@aie.com', password: 'user123' }
  ];

  for (const cred of credentials) {
    console.log(`Testing: ${cred.email}`);
    const user = await prisma.user.findUnique({
      where: { email: cred.email },
    });

    if (!user) {
      console.log(`- User NOT found in DB`);
      continue;
    }

    if (!user.password) {
      console.log(`- User has NO password in DB`);
      continue;
    }

    const isValid = await bcrypt.compare(cred.password, user.password);
    console.log(`- Password valid: ${isValid}`);
    console.log(`- Full Object: ${JSON.stringify(user, null, 2)}`);
  }
}

testAuth()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
