const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card.controller');

router.post('/', cardController.createCard);
router.get('/', cardController.getAllCards);
router.get('/:title', cardController.getCardByTitle);

module.exports = router;