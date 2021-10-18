import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import api from './api.js';

dotenv.config()

const PORT = process.env.PORT || 8585;
const app = express();

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    .use(cors())
    // api versioning;
    .use('/api/v1', api)
    .use('*', (_, res) => res.status(400).json({ error: 'Sorry we cant find that resource' }))
    .use((err, req, res, next) => res.status(err.status || 422).json({ error: err.message || 'Sorry we couldnt process that request' }))

    .listen(PORT, () => {
        if (process.env.NODE_ENV === 'development') {
            /* eslint no-console: 0 */
            console.log(`The Dev server is running on port ${PORT}`);
        } else {
            console.log(`The production server is now running at ${PORT}`);
        }
    });

export default app;