'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';
import WorkoutCard from './WorkoutCard';

export default function WorkoutList() {
  const { workouts, getWorkouts } = useStore();

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Workouts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}