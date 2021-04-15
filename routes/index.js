const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @desc    Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('welcome');
});

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    res.render('dashboard');
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
