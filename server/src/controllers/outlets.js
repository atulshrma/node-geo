import Geocoder from 'node-geocoder';
import Zones from '../models/zones';

export async function getOutletForAddress(req) {
    const { address } = req.query;

    if (!address) {
        return 'not found';
    }

    try {
        const options = {
            provider: 'google',
            apiKey: process.env.GOOGLE_GEOCODER_API,
            formatter: null,
        };

        const res = await Geocoder(options).geocode(address);

        if (!res || !res.length) {
            return 'not found';
        }

        const { latitude, longitude } = res[0];

        const zone = await Zones.findOne()
            .where('location')
            .intersects({
                type: 'Point',
                coordinates: [longitude, latitude],
            });

        if (!zone) {
            return 'not found';
        }

        return zone.name;
    } catch (e) {
        return 'not found';
    }
}
