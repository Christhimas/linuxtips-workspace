# Imagem base leve com Node.js
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json primeiro (cache de layers!)
COPY package.json .

# Instalar dependências
RUN npm install --production

# Copiar o restante do código
COPY . .

# Expor a porta da aplicação
EXPOSE 3000

# Comando para iniciar
CMD ["node", "server.js"]
