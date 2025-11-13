#!/usr/bin/env node

/**
 * Script para testar qual .env está sendo carregado
 * Use: node scripts/testEnv.js
 * Ou com production: NODE_ENV=production node scripts/testEnv.js
 */

import dotenv from 'dotenv'
import fs from 'fs'

console.log('\n' + '='.repeat(60))
console.log('🔍 TESTE DE AMBIENTE (.env)')
console.log('='.repeat(60))

// Detectar qual arquivo será carregado
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env'

console.log(`\n📍 NODE_ENV: ${process.env.NODE_ENV || 'não definido (desenvolvimento)'}`)
console.log(`📄 Arquivo a carregar: ${envFile}`)

// Verificar se arquivo existe
if (!fs.existsSync(envFile)) {
  console.error(`❌ Arquivo ${envFile} não encontrado!`)
  process.exit(1)
}

// Carregar variáveis
dotenv.config({ path: envFile })

console.log(`\n✅ Arquivo ${envFile} carregado com sucesso!`)

// Mostrar informações importantes
console.log('\n📊 VARIÁVEIS CARREGADAS:')
console.log(`   DATABASE_URL: ${process.env.DATABASE_URL}`)
console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'development'}`)
console.log(`   FRONTEND_URL: ${process.env.FRONTEND_URL}`)
console.log(`   API_KEY: ${process.env.API_KEY ? '✅ Definido' : '❌ Não definido'}`)

console.log('\n' + '='.repeat(60) + '\n')
