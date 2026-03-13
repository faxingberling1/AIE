const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const adminPassword = await bcrypt.hash('admin313', 10)
  const userPassword = await bcrypt.hash('user123', 10)

  // Delete existing users to ensure fresh start with correct roles
  await prisma.user.deleteMany({
    where: {
      email: { in: ['admin@aie.com', 'user@aie.com'] }
    }
  })

  await prisma.user.create({
    data: {
      email: 'admin@aie.com',
      name: 'Super Admin',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  await prisma.user.create({
    data: {
      email: 'user@aie.com',
      name: 'Demo User',
      password: userPassword,
      role: 'USER',
    },
  })

  console.log('Seed completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
