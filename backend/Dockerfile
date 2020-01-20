FROM node:10
RUN mkdir -p /usr/src/app
COPY / /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "app"]
# EXPOSE 5000