'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/lib/store'
import WorkoutCard from '@/components/WorkoutCard'
import WorkoutForm from '@/components/WorkoutForm'

export default function Workouts() {
  const { workouts, getWorkouts } = useStore()

  useEffect(() => {
    getWorkouts()
  }, [])

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Workouts</h1>
      <WorkoutForm />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Workouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </main>
  )
}