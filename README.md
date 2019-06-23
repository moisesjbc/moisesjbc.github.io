# My personal website

## Building (tested on Ubuntu 18.04)

1. Build and run Docker container

        sudo apt install docker.io
        docker build --build-arg UID=$UID -t personal-website .
        docker run -v `pwd`/webapp:/opt/web -p 4200:4200 -it personal-website

2. (Inside container) Build app dependencies and run test server

        npm install
        ng serve --host 0.0.0.0

## Deploying to Github Pages

1. Run the following **inside Docker container**:

        ng build --prod --base-href /
        cp dist/webapp/index.html dist/webapp/404.html
        echo -e '---\npermalink: /404.html\n---' | cat - dist/webapp/404.html > /tmp/temp && mv /tmp/temp dist/webapp/404.html

2. Commit changes

3. Publish to `master` branch:

        git subtree push --prefix webapp/dist/webapp origin master

## Help

- [Using custom donain for GitHub pages](https://medium.com/@hossainkhan/using-custom-domain-for-github-pages-86b303d3918a)
- [Github Pages — Setting up WWW subdomain with SSL (HTTPS) and avoiding ERR_CERT_COMMON_NAME_INVALID errors](https://medium.com/@monarchwadia/github-pages-setting-up-www-subdomain-with-ssl-https-aca9eca371d6)
