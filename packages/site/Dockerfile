FROM node:12

WORKDIR /usr/src/app/

COPY config/ config/
COPY packages/site packages/site/
# ToDo: How copy only files?
COPY ./ ./

WORKDIR /usr/src/app/packages/site/

# ToDo: using --force is correctly?
RUN npm i -g yarn --force
RUN yarn install

# ToDo: docker self restart?
CMD npm run start:dev
