FROM nginx:latest

COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY ../app/public /srv/www/static

WORKDIR /

EXPOSE 8080

RUN chmod +r /usr/share/nginx/html/index.html
CMD ["nginx", "-g", "daemon off;"]

#   nginx:
#     image: nginx:latest
#     ports:
#       - "8088:8080"
#     volumes:
#       - ./app/public:/srv/www/static
#       - ./default.conf:/etc/nginx/conf.d/default.conf
#     depends_on:
#       - app