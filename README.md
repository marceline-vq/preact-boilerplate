Preact Boilerplate / Starter Kit for a Weather App

# Set-Up Guide

**0. Before doing any of this, if you're using your own laptop/desktop, make sure you've got the latest versions of node and npm installed; npm v: 4.0.5
node v: 7.4.0.

## Installation

**1. Clone this repository : **

```sh
git clone --depth 1 https://github.com/nenee/preact-boilerplate.git weather-app
cd weather-app
```

**2. Make it your own:**

```sh
rm -rf .git && git init && npm init
```

> :information_source: Command above re-initializes the repo and sets up your NPM project.


**3. Install the dependencies : **

```sh
npm install
```

## Development Workflow


**4. Start a live-reload development server:**

```sh
npm run dev
```

> This is a full web server for your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**5. Testing with `mocha`, `karma`, `chai`, `sinon` via `phantomjs`:**

```sh
npm test
```

**6. Generate a production build in `./build`:**

```sh
npm run build
```

**5. Start local production server with [serve](https://github.com/zeit/serve):**

```sh
npm start
```

> This is to simulate a production (CDN) server with gzip. It just serves up the contents of `./build`. Bear in mind, if you use this the localhost port your server is running on will refresh, and you'll also need to restart it to see any changes you made to the code in `src`.


## Quick Boilerplate Overview

6. The initial run will display the iPhone version (iPhone 6/7 Plus screen size); however if you add "/ipad" to the url bar, you can view the iPad version (iPad Air screen size).

7. The CSS pre-processor in use is Less. You don't have to worry about the syntax and just write in normal CSS as there are helper modules to assist you (located in `style/helpers`).

8. There are many weather APIs out there; this boilerplate uses WeatherUnderground, which I highly recommend for any detailed info you may need; sign up is free and you can find out more here : https://www.wunderground.com/weather/api/d/docs?MR=1

- There's also a console, where you can check particular responses : https://apigee.com/console/wunderground

9. Most importantly, have fun with it ! 👌🏻