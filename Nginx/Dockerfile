# Base image - latest nginx
FROM nginx:latest

# Adding costum index.html
COPY index.html /usr/share/nginx/html

# Adding costum default
COPY default /etc/nginx/sites-available/default

# Read permissions to index.html
RUN chmod +r /usr/share/nginx/html/index.html

ENV NODE_VERSION=8.10.0
RUN apt-get update && \
    apt-get install wget curl ca-certificates rsync -y
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" &&  nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
RUN cp /root/.nvm/versions/node/v${NODE_VERSION}/bin/node /usr/bin/
RUN cp /root/.nvm/versions/node/v${NODE_VERSION}/bin/npm /usr/bin/
RUN /root/.nvm/versions/node/v${NODE_VERSION}/bin/npm install  leasot@latest -g

#Importing Node App
WORKDIR /usr/app
COPY package*.json ./ 
RUN npm install
COPY . .
CMD ["npm", "start"]


# EXPOSE 3000
EXPOSE 80




# 'nginx -g daemon off' will run as default command when any container is run that uses the image that was built using this Dockerfile
# CMD ["nginx", "-g". "daemon off;"]
