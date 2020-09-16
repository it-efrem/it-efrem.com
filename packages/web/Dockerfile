FROM node:12

WORKDIR /app/

COPY config/ config/
COPY packages/web packages/web/
# ToDo: How copy only files?
COPY ./ ./

WORKDIR /app/packages/web/

# ToDo: using --force is correctly?
RUN npm i -g yarn --force && \
    yarn

RUN yarn build