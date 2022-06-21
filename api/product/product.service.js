const db = require('../../_helpers/db');
const Product=db.product;


module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Product.findAll({
        order: [
            ['view_count', 'DESC'],
        ]
        
    });
}

async function getById(id) {
    const prod = await Product.findByPk(id);
    await prod.increment(['view_count'], { by: 1 });
    return prod
}

async function create(param) {
    console.log(param);
   // const product = new Product(param);
    return await Product.create(param);
}

async function update(id, param) {
    return await Product.update(param, {
        where: { id: id }
      })
}

async function _delete(id) {
   return  Product.destroy({
    where: { id: id }
  })
}