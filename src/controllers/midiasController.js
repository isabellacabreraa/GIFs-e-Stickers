import dados from "../models/dados.js";
const { midias } = dados;

const getAllMidias = (req,res) => {
    res.status(200).json({
        total: midias.length,
        midias: midias
    });
}

const getById = (req,res) => {
    let id = parseInt(req.params.id);

    const midia = midias.find((m) => m.id === id);

    if (midia) {
        res.status(200).json({
            success:true,
            midia: midia
        });
    }

    res.status(400).json({
        success: false,
        message: "Mídia não encontrada"
    });
}













export { getAllMidias, getById };