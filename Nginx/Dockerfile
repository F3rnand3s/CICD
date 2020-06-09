FROM nginx:latest

#Delete the Existing default.conf
RUN rm /etc/nginx/conf.d/default.conf

#Copy the custom default.conf to the nginx configuration
COPY default.conf /etc/nginx/conf.d

# EXPOSE 8080

#CMD ["nginx", "-g", "daemon off;"]