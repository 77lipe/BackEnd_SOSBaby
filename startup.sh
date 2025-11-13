#!/bin/bash
cd /home/site/wwwroot

echo "📦 Instalando dependências..."
npm ci --omit=dev || npm install

echo "🧠 Gerando Prisma Client (build Linux)..."
node node_modules/prisma/build/index.js generate

echo "🚀 Iniciando aplicação..."
node app.js
