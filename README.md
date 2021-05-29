# Node GEO

## Dependencies

The application has been developed and tested with the following dependencies

* Node v12.22.1
* NPM 6.14.12
* MongoDB 4.2.6


## Running the application

To run the application locally clone and change director to be in the application root folder.
Then run the following commands

### Install packages and dependencies

```
$ cd client && yarn install
$ cd ..
$ cd server && npm install
```

### Create .env file

While in the `./server` folder from the previous step, run the following commands


```
$ echo MONGO_DB_URL="<YOUR_MONGO_DB_URI>" > .env
```
This creates the enviroment file needed for the application to run and adds one of the env variables we need. An example of a MONGO DB URI is `mongodb://127.0.0.1:27017/node-geo`

```
$ echo GOOGLE_GEOCODER_API="<YOUR_GOOGLE_GEOCODER_API_KEY>" >> .env
```
You can follow the steps from the [official tutorial](https://developers.google.com/maps/documentation/geocoding/overview) to generate your own API Key

### Seed the databse

While in the same `./server` folder run the following command

```
$ npm run seed
```

### Run the application

Run the commands below in two separate terminal windows and `cd` into the root project folder in each

```
$ cd server && npm run dev
```

```
$ cd client && yarn start
```

## Improvements

* Create a docker-compose file to make running and seeding the application simpler.
* Improve the UI. It is very functional and frankly ugly looking.
* Maybe implement Express-React SSR since this has only one page and form it needs to serve.
* SSR would also clean up the code base and remove unnecessary files that were added by the boilerplate.
* UI could have an interactive Map component which would make selecting/entering an address much easier.



