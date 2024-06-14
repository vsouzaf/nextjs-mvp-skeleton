# Usa a imagem oficial do Ubuntu como base
FROM ubuntu:latest

# Atualiza o índice de pacotes e instalações do sistema
RUN apt-get update \
    && apt-get install -y curl gnupg

# Adiciona o repositório do Node.js ao apt
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs=20.9.*

# Instala o Node.js e o npm
RUN apt-get install -y nodejs

# Exibe a versão do Node.js e npm instalados
RUN node -v
RUN npm -v

# Define o diretório de trabalho dentro do container
WORKDIR /var/www

# Copia os arquivos do projeto para o diretório de trabalho
COPY . .

# Comando padrão a ser executado quando o container for iniciado
ENTRYPOINT ["docker/docker-entrypoint.sh"]