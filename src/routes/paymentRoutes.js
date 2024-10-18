import express from "express";
import { handlePaymennt } from "../controllers/paymentController.js";

const paymentRoutes = express.Router();

paymentRoutes.post("/handle-payment-midtrans", handlePaymennt);

export default paymentRoutes;
