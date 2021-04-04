FROM node:alpine
RUN mkdir bot
WORKDIR bot
COPY main.js package.json package-lock.json ./
CMD ["node", "main.js"]