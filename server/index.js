const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

app.listen(4000, () => console.log("Server running on 4000"));

const { getCompliment, getFortune, getGoal, deleteGoal, addGoal, updateGoal, getQuote } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/goal/:id", getGoal);
app.delete("/api/goal/:id", deleteGoal);
app.post("/api/goal", addGoal);
app.put("/api/goal/:id", updateGoal);
app.get("/api/quote", getQuote);
