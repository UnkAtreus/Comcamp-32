FROM node:12
ADD package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/
ADD . ./src
WORKDIR /src
RUN yarn global add serve
RUN yarn build
CMD ["serve", "-l", "3000", "-s", "./build"]
EXPOSE 3000