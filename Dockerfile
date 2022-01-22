FROM node:lts-alpine

# RUN mkdir -p /home/app/api/node_modules && chown -R node:node /home/app/api

# USER node

WORKDIR /home/app/api

COPY package.json yarn* ./

RUN yarn

COPY . . 

EXPOSE 3000

RUN chmod +x ./init.sh

ENTRYPOINT [ "init.sh" ]