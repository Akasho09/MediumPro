FROM node:18-alpine

WORKDIR /app

COPY backend/package.json backend/package-lock.json ./backend/
RUN cd backend && npm install

COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN cd frontend && npm install

COPY backend ./backend/
COPY frontend ./frontend/

EXPOSE 3000 3001

CMD ["sh", "-c", "cd backend && npx prisma generate && npm run dev & cd frontend && npm run dev"]