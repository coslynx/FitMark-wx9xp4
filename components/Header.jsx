'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="FitTrack Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">FitTrack</h1>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="font-medium hover:underline">
            Home
          </Link>
          <Link href="/goals" className="font-medium hover:underline">
            Goals
          </Link>
          <Link href="/workouts" className="font-medium hover:underline">
            Workouts
          </Link>
          {session ? (
            <>
              <Link href="/profile" className="font-medium hover:underline">
                Profile
              </Link>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}