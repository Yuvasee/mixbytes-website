FROM node:8-alpine AS stage

WORKDIR /static
COPY . .
RUN npm install yarn -g
RUN yarn install --production
RUN yarn build

FROM nginx:alpine
WORKDIR /app
EXPOSE 80
COPY --from=stage /static/build .
COPY docker/staging/nginx.conf /etc/nginx/nginx.conf
COPY docker/staging/robots.txt robots.txt

CMD [ "nginx-debug", "-g", "daemon off;" ]
