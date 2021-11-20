
class PetsController {
    index(req, res) {
        res.send('pet');
    }
    Cat(req, res) {
        res.send('cat');
    }
}

module.exports = new PetsController;