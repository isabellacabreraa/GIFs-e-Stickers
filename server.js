import express from "express";
import dotenv from "dotenv";
import midiasRoutes from "./src/routes/midiasRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3000;

app.get("/", (req,res)=> {
    res.send("Servidor funcionando 🚀")
});

app.use("/midias", midiasRoutes);

app.listen(serverPort, () => {
    console.log(`Servidor rodando  em http://localhost:${serverPort}`);
});