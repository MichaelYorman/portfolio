import express from 'express';
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

import listsRoute from "./routes/lists.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
host:process.env.DB_HOST,
port:process.env.DB_PORT,
user:process.env.DB_USER,
password:process.env.DB_PASSWORD,
database:process.env.DB_NAME
});
connection.connect(err => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1); // stop server if DB connection fails
  }
  console.log("Connected to MySQL!");
});
app.use("/api/", listsRoute(connection));
const PORT =process.env.port || 3000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));