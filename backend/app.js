import express from "express";

const app = express();

// route imports
import product from "./routes/productRoute.js";

// to accept json data
app.use(express.json());

// product route
app.use("/api/v1", product);





export default app;
