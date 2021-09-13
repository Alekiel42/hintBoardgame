const Hint = require('./../models/hint');

const hintController = {

    getOneHintFromCategory : async (req,res) => {
        try {
            const hint = await Hint.randomFromCategory(parseInt(req.params.category_id, 10));
            console.log(hint);
            if(hint){
                res.status(201).render('randomHint', { title : "Un nouvel indice !", hint });
            } else {
                res.status(201).render('randomHint', { message: "Il n'y a plus d'indices disponibles dans cette catégorie" });
            }
        } catch (error) {
            console.error("Erreur: ", error.message);
            res.status(500).render('error', { error: error.message });
        }
    },

    getHintsGiven : async (_, res) => {
        try {
            const hints = await Hint.findHintsGiven();
            if(hints){
                res.status(201).render('hintsGiven', { title : "La liste de tes indices", hints });
            } else {
                res.status(201).render('hintsGiven', { title : "La liste de tes indices", message : "Tu n'as pas encore reçu d'indices" });
            }
        } catch (error) {
            console.error("Erreur: ", error.message);
            res.status(500).render('error', { error: error.message });
        }
    },

    resetGame : async (_, res)=> {
        try {
            await Hint.changeHintGiven();
            res.redirect('/v1/'); //todo verfi si redirect ok ou s'il faut v1
        } catch (error) {
            console.error("Erreur: ", error.message);
            res.status(500).render('error', { error: error.message });
        }
    }
}

module.exports = hintController;


