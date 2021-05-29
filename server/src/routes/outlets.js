import express from 'express';
import { getOutletForAddress } from '../controllers/outlets';

const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const zone = await getOutletForAddress(req);
    res.json({ zone });
});

export default router;
