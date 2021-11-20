
class DetailController {
    index(req, res, next){
        res.send("main detail");// {title: "DETAIL - PETS STORE"});
    }
    test(req, res, next){
        res.send('page');
    }
}

module.exports = new DetailController;