import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import globalRoutes from "./routes/globalRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./utils/database.js";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();

dotenv.config();
connectDB();

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api", globalRoutes);
app.use("/api", paymentRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send({ text: "Hello World! tes" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
