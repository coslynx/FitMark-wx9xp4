'use client'

import { useSession } from 'next-auth/react'
import UserCard from '@/components/UserCard'
import { useStore } from '@/lib/store'
import GoalList from '@/components/GoalList'
import WorkoutList from '@/components/WorkoutList'

export default function Profile() {
  const { data: session } = useSession()
  const { user } = useStore()

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      {session ? (
        <UserCard user={user} />
      ) : (
        <p className="text-gray-600">Please sign in to view your profile.</p>
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
        <GoalList />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Workouts</h2>
        <WorkoutList />
      </div>
    </main>
  )
}