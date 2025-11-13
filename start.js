import dotenv from 'dotenv'

// Carrega as variáveis de ambiente ANTES de qualquer outro import
// Garante que módulos que usam process.env (Prisma, etc.) recebam as variáveis corretas
if (process.env.NODE_ENV === 'production') {
  console.log('📍 [start] Carregando .env.production (Banco NUVEM)')
  dotenv.config({ path: '.env.production' })
} else {
  console.log('📍 [start] Carregando .env.development (Banco LOCAL)')
  dotenv.config({ path: '.env.development' })
}

// Agora importe o app (que pode importar Prisma e outras dependências que usam env)
import './app.js'
