#!/bin/sh
# Script de entrypoint para iniciar o serviço

npm i

node -v

npx prisma

npx prisma generate

npx prisma migrate dev

npm run dev