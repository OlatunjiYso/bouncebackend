import { Router } from 'express';
import userRouter from './Routes/User.js';

const api = Router();

api
  .get('/', (req, res) => res.send('Welcome to Users API'))
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/users', userRouter)

// No routes matched? 404.
api.use((req, res) => res.status(404).json({ error: 'Sorry that route / method doesnt exist' }));


export  default api;