# Base image - latest nginx
FROM nginx:latest

# Adding costum index.html
ADD https://github.com/F3rnand3s/CICD/blob/master/Nginx/index.html /usr/share/nginx/html/

# Read permissions to index.html
RUN chmod +r /usr/share/nginx/html/index.html

# 'nginx -g daemon off' will run as default command when any container is run that uses the image that was built using this Dockerfile
CMD ["nginx", "-g". "daemon off;"]