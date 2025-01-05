const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

// Protected route
router.get('/protected', (req, res) => {
  const authHeader = req.headers['authorization'];
  console.log('Auth header', authHeader);
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access token required' });
  }

  const token = authHeader.split(' ')[1];
  console.log('Token', token);
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: `Hello, ${decoded.username}! You have access.` });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

module.exports = router;