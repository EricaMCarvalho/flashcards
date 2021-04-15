const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @desc    Login
// @route   GET /login
router.get('/login', ensureGuest, (req, res) => {
  res.render('login');
});

// @desc    Registration page
// @route   GET /register
router.get('/register', ensureGuest, (req, res) => {
  res.render('register');
});

// @desc    Register with email
// @route   GET /register
router.get('/register-with-email', ensureGuest, (req, res) => {
  res.render('register-email');
});

module.exports = router;
