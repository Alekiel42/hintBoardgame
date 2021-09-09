const Hint = require('./../models/hint');

const hintController = {

    getOneHintFromCategory : async (req,res) => {
        try {
            const hint = await Hint.randomFromCategory(parseInt(req.params.category_id, 10));
            if(hint){
                //todo changer hint_given en true 
                res.status(201).render('randomHint', { hint });
            } else {
                // todo template error ou randomhit ? 
                res.status(204).render('error', { message: "Il n'y a pas d'indices disponibles dans cette catégorie" });
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
                res.status(201).render('hintsGiven', { hints });
            } else {
                res.status(204).render('hintsGiven', { message: "Il n'y a pas d'indices disponibles dans cette catégorie" });
            }
            // todo template error ou randomhit ? 

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


