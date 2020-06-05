# My personal website

Personal website developed using [React](https://reactjs.org/). Visit it at <https://moisesjose.com>

## Building (tested on Ubuntu 18.04)

1. Build and run Docker container

        sudo apt install docker.io
        docker build --build-arg UID=$UID -t personal-website .
        docker run -v `pwd`/webapp:/opt/web -p 3000:3000 -it personal-website

2. (Inside container) Build app dependencies and run test server

        npm install
        npm run start

## Deploying to Github Pages

1. Run the following **inside Docker container**:

        npm run-script build
        cp build/index.html  build/404.html
        echo -e '---\npermalink: /404.html\n---' | cat - build/index.html > /tmp/temp && mv /tmp/temp build/404.html
        echo "moisesjose.com" > build/CNAME

2. Commit changes

        git add webapp/build/ -f
        git commit

3. Publish to `master` branch:

        git subtree push --prefix webapp/build origin master
        
        or, if fails

        git push origin `git subtree split --prefix webapp/build/`:master --force

## Help

- [Using custom domain for GitHub pages](https://medium.com/@hossainkhan/using-custom-domain-for-github-pages-86b303d3918a)
- [Github Pages — Setting up WWW subdomain with SSL (HTTPS) and avoiding ERR_CERT_COMMON_NAME_INVALID errors](https://medium.com/@monarchwadia/github-pages-setting-up-www-subdomain-with-ssl-https-aca9eca371d6)
- [Creating a Single-Page App in React using React Router](https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm)
- [Handling 404 pages (catch all routes) with React Router v4](https://tylermcginnis.com/react-router-handling-404-pages/)
- [Deploying seems to overwrite custom domain](https://github.com/tschaub/gh-pages/issues/213)