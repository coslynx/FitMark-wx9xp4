const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', db.authMiddleware, async (req, res) => {
  const { title, target, deadline, notes } = req.body;
  try {
    const newGoal = await db.createGoal(req, {
      title,
      target,
      deadline,
      notes,
    });
    res.status(201).json(newGoal);
  } catch (error) {
    console.error('Error creating goal:', error);
    res.status(500).json({ error: 'Failed to create goal' });
  }
});

router.get('/', db.authMiddleware, async (req, res) => {
  try {
    const goals = await db.getGoals(req);
    res.status(200).json(goals);
  } catch (error) {
    console.error('Error fetching goals:', error);
    res.status(500).json({ error: 'Failed to fetch goals' });
  }
});

router.put('/:id', db.authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { title, target, deadline, notes, progress } = req.body;
  try {
    const updatedGoal = await db.updateGoal(req, id, {
      title,
      target,
      deadline,
      notes,
      progress,
    });
    res.status(200).json(updatedGoal);
  } catch (error) {
    console.error('Error updating goal:', error);
    res.status(500).json({ error: 'Failed to update goal' });
  }
});

router.delete('/:id', db.authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGoal = await db.deleteGoal(req, id);
    res.status(200).json(deletedGoal);
  } catch (error) {
    console.error('Error deleting goal:', error);
    res.status(500).json({ error: 'Failed to delete goal' });
  }
});

module.exports = router;