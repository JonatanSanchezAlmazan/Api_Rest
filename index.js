require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const motosRouter = require("./src/api/routes/moto");
const PORT = 3000
const app = express();
connectDB();
app.use(express.json());

app.use("/api/v1/motos", motosRouter);

app.use("*", (req, res, next) => {
    return res.status(404).json("Route Not Founds");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})