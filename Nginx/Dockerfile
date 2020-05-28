# Base image - latest nginx
FROM nginx:latest

# Adding costum index.html
COPY index.html /usr/share/nginx/html

# Adding costum default
COPY default /etc/nginx/sites-available/default

# Read permissions to index.html
RUN chmod +r /usr/share/nginx/html/index.html

EXPOSE 80

# 'nginx -g daemon off' will run as default command when any container is run that uses the image that was built using this Dockerfile
# CMD ["nginx", "-g". "daemon off;"]
