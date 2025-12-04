const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/quiz", quizRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});