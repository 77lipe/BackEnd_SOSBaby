import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

// Utility: copy file with backup
function copyWithBackup(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`Arquivo de origem não encontrado: ${src}`)
  }
  if (fs.existsSync(dest)) {
    const bak = `${dest}.bak.${Date.now()}`
    fs.copyFileSync(dest, bak)
    console.log(`Backup criado: ${bak}`)
  }
  fs.copyFileSync(src, dest)
  console.log(`Arquivo copiado: ${src} -> ${dest}`)
}

function useProductionEnv() {
  const prod = path.resolve(process.cwd(), '.env.production')
  const dest = path.resolve(process.cwd(), '.env.development')
  copyWithBackup(prod, dest)
}

function useLocalEnv() {
  const local = path.resolve(process.cwd(), '.env.development')
  const dest = path.resolve(process.cwd(), '.env.production')
  copyWithBackup(local, dest)
}

// CLI behavior:
// node scripts/migrations.js switch production   -> copia .env.production para .env e sai
// node scripts/migrations.js switch local        -> copia .env para .env.production e sai
// node scripts/migrations.js production         -> roda migrate deploy usando .env.production
// node scripts/migrations.js development (default) -> roda migrate dev usando .env

async function main() {
  const action = process.argv[2] || 'development'

  if (action === 'switch' || action === 'set') {
    const target = process.argv[3]
    if (!target) {
      console.error('Uso: node scripts/migrations.js switch <production|local>')
      process.exit(1)
    }
    try {
      if (target === 'production') {
        useProductionEnv()
        console.log('Agora .env foi substituído por .env.production')
      } else if (target === 'local' || target === 'development') {
        useLocalEnv()
        console.log('Agora .env.production foi substituído por .env (backup criado)')
      } else {
        console.error('Target inválido. Use production ou local')
        process.exit(1)
      }
      process.exit(0)
    } catch (err) {
      console.error('Erro ao trocar arquivos .env:', err.message)
      process.exit(1)
    }
  }

  // continua com comportamento antigo de migrates
  const env = action
  const envFile = `.env.${env}`

  // Carrega o arquivo de ambiente
  const dotenv = await import('dotenv')
  dotenv.config({ path: envFile })

  // No Railway, usa MYSQL_PUBLIC_URL se disponível
  if (env === 'production') {
    process.env.DATABASE_URL = process.env.MYSQL_PUBLIC_URL || process.env.DATABASE_URL
  }

  console.log(`Usando variáveis de ${envFile}`)
  console.log(`Database URL: ${process.env.DATABASE_URL}`)

  try {
    if (env === 'production') {
      console.log('Aplicando migrations no modo produção...')
      execSync('npx prisma migrate deploy', {
        stdio: 'inherit',
        env: process.env
      })
    } else {
      console.log('Aplicando migrations no modo dev...')
      execSync('npx prisma migrate dev --name update', {
        stdio: 'inherit',
        env: process.env
      })
    }
  } catch (err) {
    console.error('Erro ao rodar migrate:', err)
    process.exit(1)
  }
}

main()
