'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store';

export default function WorkoutCard({ workout }: { workout: any }) {
  const [showDetails, setShowDetails] = useState(false);

  const { deleteWorkout } = useStore();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this workout?')) {
      deleteWorkout(workout.id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{workout.type}</h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      <div className="text-gray-700">
        <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
        <p>Duration: {workout.duration} minutes</p>
        {showDetails && (
          <>
            <p>Intensity: {workout.intensity}</p>
            <p>Calories Burned: {workout.caloriesBurned}</p>
            <p>Notes: {workout.notes}</p>
          </>
        )}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}