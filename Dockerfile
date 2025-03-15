# FROM node:18-alpine

# WORKDIR /app

# COPY backend/package.json backend/package-lock.json ./backend/
# RUN cd backend && npm install

# COPY frontend/package.json frontend/package-lock.json ./frontend/
# RUN cd frontend && npm install

# COPY backend ./backend/
# COPY frontend ./frontend/

# EXPOSE 3000 3001

# CMD ["sh", "-c", "cd backend && npx prisma generate && npm run dev & cd frontend && npm run dev"]


# ⚡ Backend Stage (Cloudflare Worker)
FROM node:18-alpine AS backend

WORKDIR /app/backend

# Install backend dependencies
COPY backend/package.json backend/package-lock.json ./
RUN npm install 

# Copy backend source code
COPY backend ./

# Generate Prisma client
RUN npx prisma generate

# 🌐 Frontend Stage (Vite)
FROM node:18-alpine AS frontend

WORKDIR /app/frontend

# Install frontend dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy frontend source code
COPY frontend ./

# 🏗️ Final Stage (Runtime)
FROM node:18-alpine

WORKDIR /app


COPY --from=backend /app/backend /app/backend
COPY --from=frontend /app/frontend /app/frontend

# Expose ports
EXPOSE 3000 8787

# Start both frontend and backend
CMD ["sh", "-c", "cd backend && npm run dev & cd frontend && npm run dev"]
