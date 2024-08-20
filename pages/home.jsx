'use client'

import { useState, useEffect } from 'react'
import { useStore } from '@/lib/store'
import GoalList from '@/components/GoalList'
import WorkoutList from '@/components/WorkoutList'
import UserCard from '@/components/UserCard'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { user } = useStore()
  const { data: session } = useSession()

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to FitTrack</h1>
      {session ? (
        <>
          <UserCard user={user} />
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
            <GoalList />
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Your Workouts</h2>
            <WorkoutList />
          </div>
        </>
      ) : (
        <p className="text-gray-600">Please sign in to view your personalized dashboard.</p>
      )}
    </main>
  )
}