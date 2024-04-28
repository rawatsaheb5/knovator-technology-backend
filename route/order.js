const express = require('express');

const { placeOrder } = require('../controller/order');

const router = express.Router();

router.post('/', placeOrder);
module.exports = router;
