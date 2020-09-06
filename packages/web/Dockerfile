FROM node:12

WORKDIR /usr/docker_shared/

COPY config/ config/
COPY packages/web packages/web/
# ToDo: How copy only files?
COPY ./ ./

WORKDIR /usr/docker_shared/packages/web/

# ToDo: using --force is correctly?
RUN npm i -g yarn --force && \
    yarn && \
    npm run build