import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config();
import routes from './routes';

process.env.TZ = "America/Sao_Paulo";
console.log(new Date());

async function main() {
  await mongoose.connect('mongodb+srv://GabrielCamargoL:1234@mommysangel.ppqnyde.mongodb.net/MommysAngel');
}
main().catch(err => console.log('mongoDB connection error: ' + err));

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(
  cors({
    allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
    exposedHeaders: ["authorization"], // you can change the headers
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  }));
app.use(routes);

app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));