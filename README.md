# JavaScript-Ajax-and-jQuery

## How To Use
1. go to client side : `npm install`
2. go to server side : `npm install`

## Package Manager
1. bower
2. npm

## Dependencies
1. express framework
2. cors
3. bootstrap
4. jQuery
5. gulp
6. browser-sync

## End Point Routes API
Default development host and port : http://localhost:3000

| Routes | HTTP | Action |
|--------|------|--------|
| /api/colors | GET | get one random hexa color |

## Package JSON (server)
```
{
  "name": "server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.1",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0"
  }
}

```

## Package JSOn (client)
```
{
  "name": "JavaScript_Ajax_and_jQuery",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/kenduigraha/JavaScript-Ajax-and-jQuery.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/kenduigraha/JavaScript-Ajax-and-jQuery/issues"
  },
  "homepage": "https://github.com/kenduigraha/JavaScript-Ajax-and-jQuery#readme",
  "dependencies": {
    "bower": "^1.8.0",
    "browser-sync": "^2.17.5",
    "gulp": "^3.9.1"
  }
}

```

## File Structure
```
.
├── README.md
├── client
│   ├── bower.json
│   ├── gulpfile.js
│   ├── index.html
│   ├── javascript
│   │   └── script.js
│   ├── lib
│   │   ├── bootstrap
│   │   └── jquery
│   └── package.json
└── server
    ├── app.js
    ├── bin
    │   └── www
    ├── controller
    │   └── colors.js
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    ├── routes
    │   └── index.js
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade

14 directories, 14 files
```

## Contributor
Ken Duigraha Putra &copy; 2016

## Licence
MIT
