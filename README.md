# weather-forecast
Simple 5 day Weather Forecast

## Install
Local development requires a local instance of [Node.js](https://nodejs.org/en/download/), compatible [npm](https://www.npmjs.com/) and a working internet connection.

After checking out the project, install dependencies via npm:

```
npm install
```

## Test
Tests are run via [Mocha](https://mochajs.org/) and can be invoked with a predefined npm script:

```
npm test
```

## Run
Running the project will start a local Node server on port `3000`

```
npm start
```

After this, simply browse to [http://localhost:3000](http://localhost:3000)

## Public Demo
A demo version of this repo is available at [http://dh-weather.herokuapp.com/](http://dh-weather.herokuapp.com/)

_Note: As this is a free-hosted heroku account, the dyno can occasionally go to sleep if inactive for 24hrs. It may take a little extra time to load in this case._

## Todo
There are embarrassingly few tests - I only managed to test the validity of the forecast transformations on the server. With more time there should definitely be tests around
integration with the 3rd party API (network outage, incorrect location ID provided etc). There are also no front-end tests whatsoever. Although most of te heavy lifting is being done in Node, it
would be good to do some sanity checking on the Angular controllers.

The front-end is written and deployed 'as is' - with more time, vendor and app code should be minified (and CDN scripts avoided). Heroku was used for speed, but it's reliance on Git deployments
can make things a little messy. Preferably, a build step would create a minified, optimised _build_ archive for pushing into a Docker container or deploying to remote servers.

The UI is not particularly elegant, but provides just enough information without being overwhelming. There is a lot of information available for each forecast given, which could perhaps be accommodated
with the use of a scrolling / sliding panel.