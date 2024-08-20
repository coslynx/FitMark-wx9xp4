const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', db.authMiddleware, async (req, res) => {
  const { type, date, duration, intensity, caloriesBurned, notes } = req.body;
  try {
    const newWorkout = await db.createWorkout(req, {
      type,
      date,
      duration,
      intensity,
      caloriesBurned,
      notes,
    });
    res.status(201).json(newWorkout);
  } catch (error) {
    console.error('Error creating workout:', error);
    res.status(500).json({ error: 'Failed to create workout' });
  }
});

router.get('/', db.authMiddleware, async (req, res) => {
  try {
    const workouts = await db.getWorkouts(req);
    res.status(200).json(workouts);
  } catch (error) {
    console.error('Error fetching workouts:', error);
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

router.put('/:id', db.authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { type, date, duration, intensity, caloriesBurned, notes } = req.body;
  try {
    const updatedWorkout = await db.updateWorkout(req, id, {
      type,
      date,
      duration,
      intensity,
      caloriesBurned,
      notes,
    });
    res.status(200).json(updatedWorkout);
  } catch (error) {
    console.error('Error updating workout:', error);
    res.status(500).json({ error: 'Failed to update workout' });
  }
});

router.delete('/:id', db.authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWorkout = await db.deleteWorkout(req, id);
    res.status(200).json(deletedWorkout);
  } catch (error) {
    console.error('Error deleting workout:', error);
    res.status(500).json({ error: 'Failed to delete workout' });
  }
});

module.exports = router;