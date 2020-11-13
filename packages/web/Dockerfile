FROM node:12.18.4

WORKDIR /app/

COPY config/ config/
COPY packages/web packages/web/
# ToDo: How copy only files?
COPY ./ ./

WORKDIR /app/packages/web/

RUN yarn \
    yarn build