FROM node:12-alpine AS builder
WORKDIR /app
COPY . .
RUN npm run build

FROM node:12-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 8080
CMD ["serve", "-p", "80", "-s", "."]
