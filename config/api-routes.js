let router = require("express").Router();

var productController = require("../api/product/product.controller");

// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to Dilligent  API",
  });
});


// product routes
router.post("/products/create", productController.create);
router.get("/products/", productController.getAll);
router.get("/products/:id", productController.getById);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController._delete);



// Export API routes
module.exports = router;
