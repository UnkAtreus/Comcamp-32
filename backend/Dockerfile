FROM node:12
# cache dependencies
ADD package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/
ADD . ./src
WORKDIR /src
CMD ["node", "app"]
EXPOSE 5000 443