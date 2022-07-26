# Install dependencies only when needed
FROM node:14-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:14-alpine AS builder

ARG STAGE=development

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

COPY ./environments/.env.${STAGE}.template .env.production.local

RUN yarn build
RUN npx prisma generate

FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/next-i18next.config.js ./next-i18next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma /app/prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src /app/src

USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]