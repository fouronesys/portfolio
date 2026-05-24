FROM node:24-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

COPY pnpm-workspace.yaml pnpm-lock.yaml package.json tsconfig.json tsconfig.base.json ./

COPY lib/ ./lib/
COPY artifacts/portfolio/ ./artifacts/portfolio/
COPY attached_assets/ ./attached_assets/

RUN pnpm install --frozen-lockfile

ENV NODE_ENV=production \
    BASE_PATH=/ \
    PORT=80

RUN pnpm --filter @workspace/portfolio run build


FROM nginx:alpine

COPY artifacts/portfolio/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/artifacts/portfolio/dist/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
