FROM node:16 as env

#Ветка для сборки
FROM env as PROD_build
WORKDIR /opt/src
COPY . .
RUN yarn install
RUN yarn run build

##Ветка для запуска
FROM nginx:1.19-alpine as PROD
COPY --from=PROD_build /opt/src/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
