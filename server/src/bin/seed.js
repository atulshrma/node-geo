const mongoose = require('mongoose');
const kml = require('gtran-kml');
const dotenv = require('dotenv');

dotenv.config();

const connect = require('../models').default;

connect(process.env.MONGO_DB_URL);

const Outlet = require('../models/outlets').default;
const Zone = require('../models/zones').default;

kml.toGeoJson('outlets.kml').then((object) => {
    const geojson = object;
    if (!geojson || !geojson.features || !geojson.features.length) {
        console.error('Unable to parse empty doc');
        process.exit(1);
    }

    geojson.features.forEach(async (feature) => {
        const obj = {
            name: feature.properties.name,
        };
        if (feature.geometry.type === 'Point') {
            obj.coordinates = feature.geometry;
            return await Outlet.create(obj);
        }

        obj.location = feature.geometry;
        return await Zone.create(obj);
    });
});
