FROM alpine:3.9.4
MAINTAINER Moisés J. <moisesjbc@gmail.com>

# Install Git, Node, NPM and Angular
RUN apk add git nodejs npm
RUN npm install -g @angular/cli

# Set working directory as the current user.
ARG UID
RUN adduser user user -u $UID -D
RUN mkdir /opt/web && chown user:user /opt/web
WORKDIR /opt/web

# Expose default port for serving Angular apps.
EXPOSE 4200

ENTRYPOINT su user