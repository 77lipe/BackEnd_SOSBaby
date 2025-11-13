#!/bin/bash
cd /home/site/wwwroot
echo "📦 Instalando dependências..."
npm install
echo "⚙️ Gerando Prisma..."
npx prisma generate
echo "🚀 Iniciando aplicação..."
npm start
