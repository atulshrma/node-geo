const mongoose = require('mongoose');
const kml = require('gtran-kml');

const connect = require('../models').default;

connect('mongodb://127.0.0.1:27017/node-geo?replicaSet=rs0');

const Outlet = mongoose.model('Outlet');
const Zone = mongoose.model('Zone');
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
