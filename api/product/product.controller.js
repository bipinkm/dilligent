const productService = require('./product.service');



exports.create= function (req, res, next) {
    productService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

exports.getAll= function (req, res, next) {
    productService.getAll()
        .then(products => res.json(products))
        .catch(err => next(err));
}

exports.getById= function (req, res, next) {
    productService.getById(req.params.id)
        .then(product => product ? res.json(product) : res.sendStatus(404))
        .catch(err => next(err));
}

exports.update= function (req, res, next) {
    productService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

exports._delete= function (req, res, next) {
    productService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}