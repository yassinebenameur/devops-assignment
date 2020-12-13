FROM node:10-alpine
LABEL MAINTAINER  ="Yassine"
WORKDIR /app
COPY ["package.json","package-lock.json*","./"]
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
RUN npm install --silent
COPY . .
EXPOSE 8080
CMD ["node","app.js"]
