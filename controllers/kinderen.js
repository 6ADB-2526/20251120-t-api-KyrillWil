/**
 * zorg ervoor dat je onderstaande zaken kan verwezelijken met deze API:
 *
 * 1. Van alle kinders alle info verkrijgen.
 * 2. Van 1 kind alle info + de id en naam van de geschenkjes
 * 3. Kinderen toevoegen aan te lijst
 * 4. Geschenken kan toevoegen aan het lijstje van een kind
 * 5. Geschenken kan wissen van de lijst van een kind
 *
 * succes!!
 */

const { kindjes : kinderen } = require("../databank/data")

//1
const alleInfo = (req, res) => {
    res.json(kinderen)
}

//2 
const getOne = (req, res) => {
    res.json(kinderen.filter(kind => kind.id == req.params.ID))
};

//3
const addKind = (req, res)=>{
    const id = getMaxID() + 1
    const voornaam = req.body.voornaam
    const achternaam = req.body.achternaam
    const geschenkId = req.body.geschenkId
    const newKind = {id: id, voornaam: voornaam, achternaam: achternaam, geschenkId: geschenkId}
    kinderen.push(newKind)
    res.json({resultaat:"Kind toegevoegd!"});
}

//4



module.exports = {
    alleInfo,
    getOne,
    addKind,
}