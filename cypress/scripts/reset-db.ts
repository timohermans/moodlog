import * as dotenv from 'dotenv'
import { PrismaClient } from "@prisma/client"

dotenv.config()

const prisma = new PrismaClient()

async function deleteAllData() {
  console.log('Removing triple column thought data')
  await prisma.tripleColumnThought.deleteMany()
}

async function main() {
  console.log('DB: Going to remove all data')
  await deleteAllData()
  console.log('DB: Removed all data')
  process.exit()
}

main()
