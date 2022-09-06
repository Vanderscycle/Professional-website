FROM node:lts-alpine AS builder

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "./"]

RUN npm install -g pnpm && \
  pnpm i -D

COPY . .

RUN pnpm run build 

FROM node:lts-alpine

USER node:node

WORKDIR /app

COPY --from=builder --chown=node:node /app/build ./build

COPY --from=builder --chown=node:node /app/node_modules ./node_modules

COPY --chown=node:node package.json .

EXPOSE 3000

CMD ["node","build"]
