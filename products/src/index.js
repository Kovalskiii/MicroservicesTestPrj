import express from 'express';
import mongoConnection from './modules/core/db.js';
import parseResponse from './modules/core/parseResponse.js';
import cors from './modules/core/cors.js';
import serverStart from './modules/core/serverStart.js';
import routes from './modules/core/routes.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: './.env' });
app.disable('x-powered-by'); // Disable Express signature
mongoConnection();
parseResponse(app);
cors(app);
routes(app);
serverStart(app);

export default app;
