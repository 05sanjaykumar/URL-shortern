
import express from 'express'
import urlRoutes from './routes/urlRoutes.js'
import { limiter } from './middleware/rateLimiter.js';


// const express = require('express')
// const urlRoutes = require('./routes/urlRoutes');

const app = express();
app.use(express.json());
app.use('/', urlRoutes);

export default app