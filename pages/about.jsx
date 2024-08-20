'use client'

import Link from 'next/link'

export default function About() {
  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">About FitTrack</h1>
      <p className="text-gray-600 mb-8">
        FitTrack is a comprehensive fitness platform designed to help you achieve your fitness goals. We provide a user-friendly interface for setting personalized goals, tracking your progress, and connecting with a supportive community.
      </p>
      <p className="text-gray-600 mb-4">
        Our mission is to empower individuals to take control of their fitness journey and achieve their full potential.
      </p>
      <p className="text-gray-600">
        We believe that fitness should be accessible to everyone, regardless of their experience level. That's why we've designed FitTrack to be intuitive, engaging, and supportive.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc text-gray-600">
          <li>Personalized goal setting</li>
          <li>Detailed workout tracking</li>
          <li>Social sharing and community support</li>
          <li>Progress visualization and insights</li>
          <li>Integration with popular fitness devices</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Join the FitTrack Community</h2>
        <p className="text-gray-600 mb-4">
          Ready to take your fitness to the next level? Sign up for FitTrack today and start your journey to a healthier, happier you!
        </p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Get Started
        </Link>
      </div>
    </main>
  )
}