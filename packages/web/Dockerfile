FROM node:12

WORKDIR /usr/src/app/

COPY config/ config/
COPY packages/web packages/web/
# ToDo: How copy only files?
COPY ./ ./

WORKDIR /usr/src/app/packages/web/

# ToDo: using --force is correctly?
RUN npm i -g yarn --force && \
    yarn && \
    npm run build && \
    cp /usr/src/app/packages/ ~/packages