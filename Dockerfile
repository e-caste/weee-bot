FROM node:alpine
RUN mkdir bot
WORKDIR bot
COPY main.js package.json package-lock.json ./
RUN npm install
CMD ["node", "main.js"]