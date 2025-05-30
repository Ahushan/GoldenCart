import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("API is running...");
});


app.use("/Products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
