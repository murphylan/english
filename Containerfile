ARG BUILD_NODE_IMAGE=zot.murphylan.cloud/library/node:22-alpine-amd64
ARG RUNNER_NODE_IMAGE=zot.murphylan.cloud/library/node:22-alpine-amd64

FROM ${BUILD_NODE_IMAGE} AS deps

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --config.dangerouslyAllowAllBuilds=true

FROM ${BUILD_NODE_IMAGE} AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN --mount=type=cache,id=nextjs-cache,target=/app/.next/cache \
    pnpm build

FROM ${RUNNER_NODE_IMAGE} AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
