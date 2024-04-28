const express = require('express');
const { getAllTheProduct } = require('../controller/product');

const router = express.Router();

router.get('/', getAllTheProduct);
module.exports = router;
