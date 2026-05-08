const express = require('express');
const { protect } = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

// All routes below are protected
router.use(protect);

// Get full user profile (with favorites & portfolio)
router.get('/profile', async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Get portfolio
router.get('/portfolio', async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('portfolio');
    return res.json(user.portfolio);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Add coin to portfolio
router.post('/portfolio', async (req, res) => {
  try {
    const { coinId, symbol, name } = req.body;
    if (!coinId) return res.status(400).json({ message: 'coinId is required' });

    const user = await User.findById(req.user._id);
    if (user.portfolio.some(c => c.coinId === coinId)) {
      return res.status(400).json({ message: 'Coin already in portfolio' });
    }

    user.portfolio.push({ coinId, symbol, name });
    await user.save();
    return res.json(user.portfolio);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Remove coin from portfolio
router.delete('/portfolio/:coinId', async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.portfolio = user.portfolio.filter(c => c.coinId !== req.params.coinId);
    await user.save();
    return res.json(user.portfolio);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Get favorites
router.get('/favorites', async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('favorites');
    return res.json(user.favorites);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Add to favorites
router.post('/favorites', async (req, res) => {
  try {
    const { title, url, date, explanation } = req.body;
    if (!url) return res.status(400).json({ message: 'url is required' });

    const user = await User.findById(req.user._id);
    if (user.favorites.some(f => f.url === url)) {
      return res.status(400).json({ message: 'Image already in favorites' });
    }

    user.favorites.push({ title, url, date, explanation });
    await user.save();
    return res.json(user.favorites);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Remove from favorites
router.delete('/favorites/:id', async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.favorites = user.favorites.filter(f => f._id.toString() !== req.params.id);
    await user.save();
    return res.json(user.favorites);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
