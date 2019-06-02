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

        ng build --prod --base-href https://moisesjbc.github.io/personal-website/
        cp dist/webapp/index.html dist/webapp/404.html
        echo -e '---\npermalink: /404.html\n---' | cat - dist/webapp/404.html > /tmp/temp

2. Commit changes

3. Publish to `gh-pages` branch:

        git subtree push --prefix webapp/dist/webapp origin gh-pages

