const { PrismaClient } = require('@prisma/client');
const { Prisma } = require('@prisma/client');
const { randomUUID } = require('crypto');

const prisma = new PrismaClient();

async function createGoal(req, res) {
  const { title, target, deadline, notes } = req.body;
  try {
    const newGoal = await prisma.goal.create({
      data: {
        id: randomUUID(),
        title: title,
        target: target,
        deadline: deadline,
        notes: notes,
        userId: req.user.id,
        progress: 0,
      },
    });
    res.status(201).json(newGoal);
  } catch (error) {
    console.error('Error creating goal:', error);
    res.status(500).json({ error: 'Failed to create goal' });
  }
}

async function getGoals(req, res) {
  try {
    const goals = await prisma.goal.findMany({
      where: {
        userId: req.user.id,
      },
    });
    res.status(200).json(goals);
  } catch (error) {
    console.error('Error fetching goals:', error);
    res.status(500).json({ error: 'Failed to fetch goals' });
  }
}

async function updateGoal(req, res) {
  const { id } = req.query;
  const { title, target, deadline, notes, progress } = req.body;
  try {
    const updatedGoal = await prisma.goal.update({
      where: {
        id: id,
        userId: req.user.id,
      },
      data: {
        title: title,
        target: target,
        deadline: deadline,
        notes: notes,
        progress: progress,
      },
    });
    res.status(200).json(updatedGoal);
  } catch (error) {
    console.error('Error updating goal:', error);
    res.status(500).json({ error: 'Failed to update goal' });
  }
}

async function deleteGoal(req, res) {
  const { id } = req.query;
  try {
    const deletedGoal = await prisma.goal.delete({
      where: {
        id: id,
        userId: req.user.id,
      },
    });
    res.status(200).json(deletedGoal);
  } catch (error) {
    console.error('Error deleting goal:', error);
    res.status(500).json({ error: 'Failed to delete goal' });
  }
}

async function createWorkout(req, res) {
  const { type, date, duration, intensity, caloriesBurned, notes } = req.body;
  try {
    const newWorkout = await prisma.workout.create({
      data: {
        id: randomUUID(),
        type: type,
        date: date,
        duration: duration,
        intensity: intensity,
        caloriesBurned: caloriesBurned,
        notes: notes,
        userId: req.user.id,
      },
    });
    res.status(201).json(newWorkout);
  } catch (error) {
    console.error('Error creating workout:', error);
    res.status(500).json({ error: 'Failed to create workout' });
  }
}

async function getWorkouts(req, res) {
  try {
    const workouts = await prisma.workout.findMany({
      where: {
        userId: req.user.id,
      },
      orderBy: {
        date: 'desc',
      },
    });
    res.status(200).json(workouts);
  } catch (error) {
    console.error('Error fetching workouts:', error);
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
}

async function updateWorkout(req, res) {
  const { id } = req.query;
  const { type, date, duration, intensity, caloriesBurned, notes } = req.body;
  try {
    const updatedWorkout = await prisma.workout.update({
      where: {
        id: id,
        userId: req.user.id,
      },
      data: {
        type: type,
        date: date,
        duration: duration,
        intensity: intensity,
        caloriesBurned: caloriesBurned,
        notes: notes,
      },
    });
    res.status(200).json(updatedWorkout);
  } catch (error) {
    console.error('Error updating workout:', error);
    res.status(500).json({ error: 'Failed to update workout' });
  }
}

async function deleteWorkout(req, res) {
  const { id } = req.query;
  try {
    const deletedWorkout = await prisma.workout.delete({
      where: {
        id: id,
        userId: req.user.id,
      },
    });
    res.status(200).json(deletedWorkout);
  } catch (error) {
    console.error('Error deleting workout:', error);
    res.status(500).json({ error: 'Failed to delete workout' });
  }
}

async function getUser(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
}

module.exports = {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
  createWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
  getUser,
};