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

const createMidia = (req, res) => {
    const { nome, categoria, origem, tags, formato, tamanho, } = req.body;

    const formatoLista = ["gif", "png", "webp", "jpeg"];


    if (!nome) {
        return res.status(400).json({
            success: false,
            message: "O campo 'nome' é obrigatório para criar uma midia!"
        });
    }

    if (!categoria) {
        return res.status(400).json({
            success: false,
            message: "O campo 'categoria' é obrigatório para criar uma midia!"
        });
    }

    if (!origem) {
        return res.status(400).json({
            success: false,
            message: "O campo 'origem' é obrigatório para criar uma midia!"
        });
    }
    if (!tags) {
        return res.status(400).json({
            success: false,
            message: "O campo 'tags' é obrigatório para criar uma midia!"
        });
    }

    if (!formato || !formatoLista.includes(formato.toLowerCase())) {
        return res.status(400).json({
            success: false,
            message: `O campo 'formato' é obrigatório e deve ser uma das opções: ${formatoLista.join(", ")}!`
        });
    }

        if (!tamanho || tamanho > 5 ) {
            return res.status(400).json({
                success: false,
                message: "O campo 'tamanho' deve ser menor que 5MB!"
            });
        }


    const novaMidia = {
        id: midias.length + 1,
        nome,
        categoria,
        origem,
        tags,
        formato: formato.toLowerCase(),
        dataCadastro: new Date(),
        tamanho
    }

    midias.push(novaMidia);
    res.status(201).json({
        success: true,
        message: "Midia cadastrada com sucesso",
        midia: novaMidia

    })
}


const deleteMidia = (req, res) => {
    let id = parseInt(req.params.id);
    const midiaParaRemover = midias.find(c => c.id === id);

    if (!midiaParaRemover) {
        return res.status(404).json({
            success: false,
            message: 'Esta midia nao existe'
        })
    }
    const midiasFiltradas = midias.filter(midia => midia.id !== id);
    midias.splice(0, midias.length, ...midiasFiltradas);
    res.status(200).json({
        success: true,
        message: 'midia deletada com sucesso',
        midiaRemovida: midiaParaRemover
    })
}


const updateMidia = (req, res) => {
    const id = parseInt(req.params.id);

    const { nome, categoria, origem, tags, formato, tamanho, } = req.body;

    const formatoLista = ["gif", "png", "webp", "jpeg"];


    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser um número válido"
        })
    }

    const midiaExiste = midias.find(midia => midia.id === id);

    if (!midiaExiste) {
        return res.status(400).json({
            success: false,
            message: "A midia não existe."
        })
    }

    if(formato){
        if (!formatoLista.includes(formato.toLowerCase())) {
            return res.status(400).json({
                success: false,
                message: `O campo 'formato' deve ser uma das opções: ${formatoLista.join(", ")}!`
            });
        }
    }


        if (tamanho || tamanho > 5 ) {
            return res.status(400).json({
                success: false,
                message: "O campo 'tamanho' deve ser menor que 5MB!"
            });
        }

    const midiasAtualizadas = midias.map(midia => {
        return midia.id === id
            ? {
                ...midia,
                ...(nome      && { nome }),
                ...(categoria    && { categoria }),
                ...(origem  && { origem }),
                ...(tags      && { tags }),
                ...(formato      && { formato }),
                ...(tamanho      && { tamanho }),
            }
            : midia;
    });
    
    midias.splice(0, midias.length, ...midiasAtualizadas);

    const midiaNova = midias.find(midia => midia.id === id);

    res.status(200).json({
        success: true,
        message: "Dados atualizados com sucesso",
        midia: midiaNova
    })

}

const categoriaFiltrada = (req,res) =>  {
    let id = req.params.id;

    const categoriaFiltrada = categorias.filter((m) => m.id === id);

    if (categoria) {
        res.status(200).json({
            success:true,
            categoriaFiltrada: categoriaFiltrada
        });
    }

    res.status(400).json({
        success: false,
        message: "Categoria não encontrada"
    });
}





export { getAllMidias, getById, createMidia, deleteMidia, updateMidia, categoriaFiltrada};

