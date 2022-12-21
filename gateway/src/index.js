import express from 'express';
import parseResponse from './modules/core/parseResponse.js';
import cors from './modules/core/cors.js';
import serverStart from './modules/core/serverStart.js';
import routes from './modules/core/routes.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: './.env' });
app.disable('x-powered-by'); // Disable Express signature
parseResponse(app);
cors(app);
routes(app);
serverStart(app);

export default app;
