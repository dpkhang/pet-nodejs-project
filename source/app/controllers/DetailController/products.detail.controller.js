
class ProductsController {
    index(req, res) {
        res.send('product');
    }
    ProductsCat(req, res) {
        res.send('product cat');
    }
    ProductsDog(req, res) {
        res.send('product dog');
    }
}

module.exports = new ProductsController;