import dados from "../models/dados.js";
const { midias } = dados;

const getAllMidias = (req,res) => {
    res.status(200).json({
        total: midias.length,
        midias: midias
    });
}













export { getAllMidias };