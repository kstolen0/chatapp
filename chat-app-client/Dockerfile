FROM node:21-alpine3.18 AS base
WORKDIR /app

FROM base AS build

COPY package*.json .

RUN npm ci

FROM base AS run 

COPY --from=build /app/node_modules node_modules/
COPY package.json .
COPY src src
COPY index.html .
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .
COPY public public/
COPY .eslintrc.cjs .