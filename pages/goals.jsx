'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/lib/store'
import GoalCard from '@/components/GoalCard'
import GoalForm from '@/components/GoalForm'

export default function Goals() {
  const { goals, getGoals } = useStore()

  useEffect(() => {
    getGoals()
  }, [])

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Goals</h1>
      <GoalForm />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>
    </main>
  )
}