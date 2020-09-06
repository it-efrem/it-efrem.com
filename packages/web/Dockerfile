FROM node:12

WORKDIR /usr/app/

COPY config/ config/
COPY packages/web packages/web/
# ToDo: How copy only files?
COPY ./ ./

WORKDIR /usr/app/packages/web/

# ToDo: using --force is correctly?
RUN npm i -g yarn --force && \
    yarn && \
    npm run build && \
    cp -r /usr/app /usr/docker_shared