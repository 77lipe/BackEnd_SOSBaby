# Setup de Ambiente - BackEnd SOSBaby

Este projeto suporta dois ambientes:
- **Desenvolvimento Local**: Banco de dados MySQL local
- **Produção/Azure**: Banco de dados MySQL na nuvem (Azure)

## 📋 Pré-requisitos

- Node.js v18+
- npm ou yarn
- Git

## 🚀 Instalação Inicial

### 1. Clonar o repositório
```bash
git clone <repo-url>
cd BackEnd_SOSBaby
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Gerar Prisma Client
```bash
npx prisma generate
```

---

## 🏠 **Desenvolvimento Local (Banco Local)**

### Configuração
O arquivo `.env.development` já está configurado com:
```
DATABASE_URL="mysql://root:12345678@localhost:3306/sosbaby"
```

Se suas credenciais forem diferentes, edite `.env.development`.

### Iniciar servidor
```bash
npm start
# ou com hot reload:
npm run dev
# (isso vai carregar .env.development automaticamente)
```

### Logs esperados
```
📍 Carregando .env.development (Banco LOCAL)
🌍 Ambiente: development
📌 Mapeamento de banco: LOCAL (env: .env.development)
📊 Conexão com banco: ✅ Conectado
```

---

## ☁️ **Produção/Azure (Banco na Nuvem)**

### Configuração
O arquivo `.env.production` contém as credenciais do Azure MySQL:
```
DATABASE_URL="mysql://sosbaby:Bcd127tcc@sosbaby.mysql.database.azure.com:3306/sosbaby?sslaccept=strict&ssl=true"
```

### Iniciar servidor
```bash
npm run prod
# ou com hot reload:
npm run prod:dev
# (isso vai carregar .env.production automaticamente)
```

### Logs esperados
```
📍 Carregando .env.production (Banco na NUVEM - Azure)
🌍 Ambiente: production
📌 Mapeamento de banco: NUVEM (env: .env.production)
📊 Conexão com banco: ✅ Conectado
```

---

## 🔄 **Alternando entre Ambientes**

Se precisar trocar rapidamente entre ambientes, use:

### Usar Azure (copia .env.production para .env.development)
```bash
node scripts/migrations.js switch production
```

### Usar Local (copia .env.development para .env.production)
```bash
node scripts/migrations.js switch local
```

⚠️ **Nota**: O script cria backups automáticos antes de sobrescrever.

---

## 🧪 **Testes de Ambiente**

Para verificar qual `.env` está sendo carregado:

```bash
# Testar ambiente local
npm run test:env

# Testar ambiente production
npm run test:env:prod
```

---

## 📊 **Scripts npm Disponíveis**

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia servidor usando `.env.development` (banco local) |
| `npm run dev` | Inicia com nodemon usando `.env.development` (banco local, hot reload) |
| `npm run prod` | Inicia servidor usando `.env.production` (Azure) |
| `npm run prod:dev` | Inicia com nodemon usando `.env.production` (Azure, hot reload) |
| `npm run test:env` | Verifica qual `.env` será carregado (desenvolvimento) |
| `npm run test:env:prod` | Verifica qual `.env` será carregado (produção) |

---

## 🔐 **Variáveis de Ambiente**

### `.env.development` (Banco Local)
```
DATABASE_URL="mysql://root:12345678@localhost:3306/sosbaby"
JWT_SECRET="kgI5vx"
SMTP_HOST="smtp.gmail.com"
SMTP_USER="babysos212@gmail.com"
SMTP_PASS="nspv ucpd scxy mhle"
FRONTEND_URL="http://localhost:5173"
API_KEY=AIzaSyDC_KNtycA4z4cmbwa_Iu9VGu3gxkFkPow
TWILIO_ACCOUNT_SID=AC5998b41384c8df0adaa35b74cd507fb3
TWILIO_API_KEY_SID=SK9fbacf30c9b239843a8b8419cbe09c44
TWILIO_API_KEY_SECRET=1Y4W5ZXbXOEOtgpFoWEPwvWdJMJmK9iV
```

### `.env.production` (Azure)
```
DATABASE_URL="mysql://sosbaby:Bcd127tcc@sosbaby.mysql.database.azure.com:3306/sosbaby?sslaccept=strict&ssl=true"
JWT_SECRET="kgI5vx"
SMTP_HOST="smtp.gmail.com"
SMTP_USER="babysos212@gmail.com"
SMTP_PASS="nspv ucpd scxy mhle"
FRONTEND_URL="http://localhost:5173"
API_KEY=AIzaSyDC_KNtycA4z4cmbwa_Iu9VGu3gxkFkPow
TWILIO_ACCOUNT_SID=AC5998b41384c8df0adaa35b74cd507fb3
TWILIO_API_KEY_SID=SK9fbacf30c9b239843a8b8419cbe09c44
TWILIO_API_KEY_SECRET=1Y4W5ZXbXOEOtgpFoWEPwvWdJMJmK9iV
```

---

## 🐛 **Troubleshooting**

### Erro: "Connections using insecure transport are prohibited"
**Causa**: Prisma não está usando SSL para conectar ao Azure.

**Solução**:
1. Verifique se `.env.production` contém `?sslaccept=strict&ssl=true` na `DATABASE_URL`
2. Regenere Prisma Client: `npx prisma generate`
3. Reinicie o servidor completamente

### Erro: "Connection refused" ao conectar ao banco local
**Causa**: MySQL local não está rodando ou credenciais erradas.

**Solução**:
1. Inicie o serviço MySQL: `mysql.server start` (macOS) ou `sudo systemctl start mysql` (Linux)
2. Verifique credenciais em `.env.development`

### Dados gravando no banco errado
**Causa**: Variáveis de ambiente não foram recarregadas.

**Solução**:
1. Matador processo: `Ctrl+C` no terminal
2. Reinicie o servidor: `npm start` ou `npm run prod`

---

## 📝 **Notas Importantes**

- ✅ `.env.development` e `.env.production` NUNCA devem ser deletados
- ✅ Sempre reinicie o servidor após alterar variáveis de ambiente
- ✅ Use `npm run prod` ou `npm run prod:dev` para testar Azure
- ✅ O Prisma carrega `DATABASE_URL` no startup — mudanças só entram ao reiniciar
- ✅ Para testes rápidos, use `npm run test:env` antes de iniciar o servidor

---

## 📞 **Suporte**

Se encontrar problemas:
1. Verifique os logs do servidor
2. Confirme que o `.env` correto está sendo carregado
3. Teste a conexão com: `npm run test:env` e `npm run test:env:prod`
4. Verifique as credenciais de BD em ambos os arquivos `.env`
