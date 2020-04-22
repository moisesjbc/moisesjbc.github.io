FROM alpine:3.9.4
MAINTAINER Moisés J. <moisesjbc@gmail.com>

# Install dependencies
RUN apk add git nodejs npm

# Set working directory as the current user.
ARG UID
RUN adduser user user -u $UID -D
RUN mkdir /opt/web && chown user:user /opt/web
WORKDIR /opt/web

# Expose default port for serving React apps.
EXPOSE 3000

# Enable hot reloading while developing
# Source: <https://github.com/facebook/create-react-app/issues/3969>
ENV CHOKIDAR_USEPOLLING=true

ENTRYPOINT su user
