#!/usr/bin/env node

import dotenv from 'dotenv'
import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'

const envPath = path.resolve(process.cwd(), '.env.production')
const envLocalPath = path.resolve(process.cwd(), '.env')
const envBackupPath = path.resolve(process.cwd(), '.env.backup')

console.log(`📍 Carregando ${envPath}...`)
dotenv.config({ path: envPath })

console.log(`🌍 NODE_ENV: ${process.env.NODE_ENV || 'não definido'}`)
console.log(`📊 DATABASE_URL: ${process.env.DATABASE_URL}`)
console.log(``)

try {
  // Fazer backup do .env se existir
  if (fs.existsSync(envLocalPath)) {
    fs.copyFileSync(envLocalPath, envBackupPath)
    console.log(`📦 Backup de .env criado em .env.backup`)
    fs.unlinkSync(envLocalPath)
  }
  
  // Copiar .env.production para .env
  fs.copyFileSync(envPath, envLocalPath)
  console.log(`🔄 .env.production copiado para .env`)
  
  console.log('🚀 Executando: npx prisma migrate reset...')
  execSync('npx prisma migrate reset --force', {
    stdio: 'inherit',
    env: process.env
  })
  
  console.log(`✅ Reset e sincronização concluídos com sucesso!`)
  
} catch (err) {
  console.error(`❌ Erro ao executar reset: ${err.message}`)
  process.exit(1)
} finally {
  // Restaurar .env original
  if (fs.existsSync(envBackupPath)) {
    if (fs.existsSync(envLocalPath)) {
      fs.unlinkSync(envLocalPath)
    }
    fs.copyFileSync(envBackupPath, envLocalPath)
    fs.unlinkSync(envBackupPath)
    console.log(`✅ .env restaurado`)
  }
}
