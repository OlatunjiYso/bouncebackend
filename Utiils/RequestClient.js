import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const token = process.env.TOKEN;

const requestClient = axios.create({
    baseURL: 'https://coding-challenge-api.bounceinsights.com',
    timeout: 15000,
    headers:  {'Authorization': 'Bearer '+token}
  });

  export default requestClient;