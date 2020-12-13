FROM node:12
LABEL MAINTAINER  ="Yassine"
WORKDIR /app
COPY ["package.json","package-lock.json*","./"]
RUN npm install --silent
COPY . .
CMD ["node","app.js"]
