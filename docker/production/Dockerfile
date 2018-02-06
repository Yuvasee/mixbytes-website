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
COPY docker/production/nginx.conf /etc/nginx/nginx.conf
COPY docker/production/robots.txt robots.txt

CMD [ "nginx-debug", "-g", "daemon off;" ]
