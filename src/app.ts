/**
 * The following lines intialize dotenv,
 * so that env vars from the .env file are present in process.env
 */
import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
