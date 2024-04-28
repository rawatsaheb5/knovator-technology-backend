const Product = require('../model/product')

const getAllTheProduct = async (req, res) => {
    try {
      // Fetch all products from the database
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      // If an error occurs, send an error response
      res.status(500).json({ message: err.message });
    }
}
  
module.exports = {
    getAllTheProduct,
}