import mongoose from 'mongoose';

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});

const OutletSchema = new mongoose.Schema({
    name: String,
    coordinates: {
        type: pointSchema,
        required: true,
    },
});

export default mongoose.model('Outlets', OutletSchema);
