const petschema = require('../../config/schemas/pet.schema');


class PetModel {
    readfromDBCat(req, res, next) {
        return petschema.find({type: "Cat"})
            .limit(6)
            .then(pets => {
                return pets.map(pet => pet.toObject());
            })
            .catch(err =>{
                res.send(err);
            })
    }
    
    readfromDBDog(req, res, next) {
        return petschema.find({type: "Dog"})
            .limit(6)
            .then(pets => {
                return pets.map(pet => pet.toObject());
            })
            .catch(err =>{
                res.send(err);
            })
    }
}

module.exports = new PetModel;