import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function loadSQL(filename) {
  try {
    const filePath = path.resolve(process.cwd(), `databasse/${filename}`)
    const sql = fs.readFileSync(filePath, 'utf-8')
    
    // Split by semicolons but be careful with comments
    const statements = sql
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'))

    console.log(`📄 Carregando ${filename}...`)
    console.log(`📊 Total de statements: ${statements.length}`)
    
    let executed = 0
    for (const statement of statements) {
      try {
        await prisma.$executeRawUnsafe(statement)
        executed++
      } catch (err) {
        // Ignorar erros de tabela já existente
        if (!err.message.includes('already exists') && 
            !err.message.includes('already present') &&
            !err.message.includes('Duplicate entry')) {
          console.warn(`⚠️  Aviso ao executar statement: ${err.message}`)
        }
      }
    }
    
    console.log(`✅ ${executed} statements executados com sucesso!`)
  } catch (err) {
    console.error(`❌ Erro ao carregar SQL: ${err.message}`)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

const script = process.argv[2] || 'script.sql'
await loadSQL(script)
