'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store';

export default function GoalCard({ goal }: { goal: any }) {
  const [showDetails, setShowDetails] = useState(false);

  const { deleteGoal } = useStore();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this goal?')) {
      deleteGoal(goal.id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{goal.title}</h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      <div className="text-gray-700">
        <p>Target: {goal.target}</p>
        <p>Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
        {showDetails && (
          <>
            <p>Progress: {goal.progress}%</p>
            <p>Notes: {goal.notes}</p>
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