'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store';

export default function GoalForm() {
  const { addGoal } = useStore();
  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [notes, setNotes] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addGoal({
        title,
        target,
        deadline,
        notes,
      });
      setTitle('');
      setTarget('');
      setDeadline(new Date());
      setNotes('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Set New Goal</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="target" className="block text-gray-700 text-sm font-bold mb-2">
            Target
          </label>
          <input
            type="number"
            id="target"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={deadline.toISOString().slice(0, 10)}
            onChange={(e) => setDeadline(new Date(e.target.value))}
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
            Add Goal
          </button>
        </div>
      </form>
    </div>
  );
}