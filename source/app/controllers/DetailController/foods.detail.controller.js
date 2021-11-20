
class FoodsController{
    index(req, res){
        res.send('food main');
    }
    FoodCat(req, res, next){
        res.send(req.query.id);
    }
    FoodDog(req, res, next){
        res.send('food dog');
    }
}

module.exports = new FoodsController;