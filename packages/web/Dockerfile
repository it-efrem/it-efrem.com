FROM node:12.18.4-stretch-slim

WORKDIR /app/

COPY config/ config/
COPY packages/web packages/web/
# ToDo: How copy only files?
COPY ./ ./

WORKDIR /app/packages/web/

# ToDo: using --force is correctly?
RUN npm i -g yarn --force && \
    yarn

RUN yarn \
    yarn build