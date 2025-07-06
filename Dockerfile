FROM node:22-bookworm as builder
WORKDIR /app
COPY . .
RUN npm i

FROM node:22-bookworm as runner
WORKDIR /app
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist  # only if your build outputs to dist/
COPY --from=builder /app/start.sh ./start.sh


RUN chmod +x ./start.sh

CMD ["./start.sh"]