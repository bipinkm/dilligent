
module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },

    description: {
      type: Sequelize.STRING,
    },

    price : {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      //defaultValue: 0
    },
    view_count:{
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });

  return Product;
};
  