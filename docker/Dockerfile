FROM node:8.10.0-alpine AS node_stage

WORKDIR /static
COPY . .
RUN yarn install --production
RUN yarn build

FROM nginx:1.12.2-alpine
LABEL maintainer=smartz.io
#---labels-will-be-here---
WORKDIR /app
EXPOSE 80
RUN apk --no-cache --update upgrade
COPY --from=node_stage /static/build/ web_root/
COPY docker/entrypoint.sh .
COPY docker/conf/ conf/
CMD [ "/bin/sh", "entrypoint.sh" ]
