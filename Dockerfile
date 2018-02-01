FROM node:8-alpine AS stage

WORKDIR /static
COPY . .
RUN npm install yarn -g
RUN yarn install --production
RUN yarn build

FROM nginx:alpine
WORKDIR /app
EXPOSE 80
COPY --from=stage /static/build /usr/share/nginx/html

CMD [ "nginx-debug", "-g", "daemon off;" ]
