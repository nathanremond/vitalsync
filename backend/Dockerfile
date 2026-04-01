# Le multi-stage build est pertinent car il réduit la taille finale de l'image en séparant les 
# étapes de build et de runtime, permet de ne pas inclure les outils de build et de tests 
# dans l'image de l'étape du runtime, améliorant la sécurité.

# ========================
# Build stage
# ========================

FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm test
RUN npm prune --omit=dev

# ========================
# Runtime stage
# ========================

FROM node:20-alpine AS runtime

WORKDIR /app

# Non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=build --chown=appuser:appgroup /app /app

USER appuser

EXPOSE 3000

CMD ["npm", "run", "start"]
