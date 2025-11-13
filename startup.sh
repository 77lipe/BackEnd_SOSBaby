#!/bin/bash
echo "📦 Instalando dependências..."
npm install

echo "⚙️ Gerando Prisma Client..."
npx prisma generate

echo "🚀 Iniciando servidor..."
npm run start
