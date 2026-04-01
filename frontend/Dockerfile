# ========================
# Build stage
# ========================

FROM alpine:3.18 AS build

WORKDIR /app
COPY index.html ./

# ========================
# Runtime stage
# ========================

FROM nginx:alpine AS runtime

COPY --from=build /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]