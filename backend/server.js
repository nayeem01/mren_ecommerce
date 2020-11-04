import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/productRoute.js";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();
connectDB();

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
    res.send("api is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running on ${PORT}`));
