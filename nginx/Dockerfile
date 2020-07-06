FROM nginx:latest

# COPY proxy.conf /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
RUN sudo nginx -c /etc/nginx/nginx.conf -t

EXPOSE 80




