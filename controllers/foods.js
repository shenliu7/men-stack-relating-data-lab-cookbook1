// controllers/foods.js

const express = require('express');
const router = express.Router({ mergeParams: true });

const User = require('../models/user.js');

// router logic will go here - will be built later on in the lab
router.get('/', (req, res) => {
    res.render('foods/index.ejs')
  });
  
  router.get('/new', (req, res) => {
    res.render('foods/new', { userId: req.params.userId });
});

router.post('/', (req, res) => {
  const { userId } = req.params;
  const { name, quantity, expiry } = req.body;

  // Assuming you have a Food model to handle the database operations
  const newFoodItem = new Food({ userId, name, quantity, expiry });

  newFoodItem.save()
      .then(() => res.redirect(`/users/${userId}/foods`))
      .catch(err => res.status(500).send(err));
});

module.exports = router;

