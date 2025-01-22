import express from 'express';
import  { urlRoute } from './routes/url.route.js'

const app = express();

app.use(express.json({limit : "16kb"}));
app.use('/url', urlRoute);


export { app }