# Base image - latest nginx
FROM nginx:latest

# Adding costum index.html
COPY index.html /usr/share/nginx/html

# Adding costum default
COPY default /etc/nginx/sites-available/default

# Read permissions to index.html
RUN chmod +r /usr/share/nginx/html/index.html

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
RUN npm install

EXPOSE 80

# 'nginx -g daemon off' will run as default command when any container is run that uses the image that was built using this Dockerfile
# CMD ["nginx", "-g". "daemon off;"]
