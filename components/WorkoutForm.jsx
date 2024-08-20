'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store';

export default function WorkoutForm() {
  const { addWorkout } = useStore();
  const [type, setType] = useState('');
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addWorkout({
        type,
        date,
        duration,
        intensity,
        caloriesBurned,
        notes,
      });
      setType('');
      setDate(new Date());
      setDuration('');
      setIntensity('');
      setCaloriesBurned('');
      setNotes('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Log Workout</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">
            Type
          </label>
          <input
            type="text"
            id="type"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={date.toISOString().slice(0, 10)}
            onChange={(e) => setDate(new Date(e.target.value))}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">
            Duration (minutes)
          </label>
          <input
            type="number"
            id="duration"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="intensity" className="block text-gray-700 text-sm font-bold mb-2">
            Intensity (1-10)
          </label>
          <input
            type="number"
            id="intensity"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caloriesBurned" className="block text-gray-700 text-sm font-bold mb-2">
            Calories Burned
          </label>
          <input
            type="number"
            id="caloriesBurned"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={caloriesBurned}
            onChange={(e) => setCaloriesBurned(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">
            Notes
          </label>
          <textarea
            id="notes"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log Workout
          </button>
        </div>
      </form>
    </div>
  );
}