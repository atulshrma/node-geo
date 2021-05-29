import mongoose from 'mongoose';

const polygonSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Polygon'],
        required: true,
    },
    coordinates: {
        type: [[[Number]]],
        required: true,
    },
});

const ZoneSchema = new mongoose.Schema({
    name: String,
    location: polygonSchema,
});

export default mongoose.model('Zones', ZoneSchema);
