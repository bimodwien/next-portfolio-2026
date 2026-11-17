# docker build -t portfolio-web .   (normally run through docker-compose.yml)

FROM node:24.21.0-slim AS base
# Match the npm that wrote package-lock.json.
RUN npm install -g npm@12.2.2
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# 1) Install dependencies, then build.
FROM base AS builder
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2) Final image: only the standalone server and its static files.
FROM base AS runner
ENV NODE_ENV=production
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public
USER node
CMD ["node", "server.js"]
