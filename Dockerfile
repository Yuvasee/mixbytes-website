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
COPY nginx.conf /etc/nginx/nginx.conf

CMD [ "nginx-debug", "-g", "daemon off;" ]
