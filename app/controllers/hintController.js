const Hint = require('./../models/hint');

const hintController = {

    getOneHintFromCategory : async (req,res) => {
        try {
            const hint = await Hint.randomFromCategory(parseInt(req.params.category_id, 10));
            if(hint){
                res.status(201).json(hint);
            } else {
                res.status(204).json("Il n'y a pas d'indices disponibles dans cette catégorie");
            }
        } catch (error) {
            console.error("Erreur: ", error.message);
            res.status(500).send(error.message);
        }
    },

    getHintsGiven : async (_, res) => {
        try {
            const hints = await Hint.findHintsGiven();
            if(!hints){
                res.status(204).json("Aucun indice n'a été récupéré")
            } 
            res.status(201).json(hints);
        } catch (error) {
            console.error("Erreur: ", error.message);
            res.status(500).send(error.message);
        }
    }
}

module.exports = hintController;


