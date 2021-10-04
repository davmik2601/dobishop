import dotenv from  'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import keys from './config/keys.js';
import Routes from './routes/index.js';
import passport from 'passport';
import passportJwt from './api/v1/utils/passport-jwt.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3001;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cors());
app.use(passport.initialize());
passportJwt(passport);
app.use("/api/v1", Routes);

(async function startApp() {

  try {
    await mongoose.connect(keys.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("Connected to mongoDB.")
    });
    
    app.listen(PORT, () => {
      console.log(`Server Started On Port ${PORT} ...`)
    })
  } catch (err) {
    console.log(err);
  }
})();