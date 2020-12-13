FROM node:12
LABEL MAINTAINER  ="Yassine"
WORKDIR /app
COPY ["package.json","package-lock.json*","./"]
RUN npm install --silent
COPY . .
EXPOSE 8080
CMD ["node","app.js"]
