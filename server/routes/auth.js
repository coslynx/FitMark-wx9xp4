const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', db.authMiddleware, async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.createUser(req, { email, password });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.loginUser(email, password);
    req.session.user = user;
    res.status(200).json(user);
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

router.get('/session', db.authMiddleware, async (req, res) => {
  try {
    res.status(200).json(req.session.user);
  } catch (error) {
    console.error('Error fetching user session:', error);
    res.status(500).json({ error: 'Failed to fetch user session' });
  }
});

router.delete('/logout', db.authMiddleware, async (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error logging out user:', error);
    res.status(500).json({ error: 'Failed to log out user' });
  }
});

module.exports = router;