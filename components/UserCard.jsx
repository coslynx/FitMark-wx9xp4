'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function UserCard({ user }: { user: any }) {
  const { data: session } = useSession();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center">
        {user.image ? (
          <Image
            src={user.image}
            alt={`${user.name} Profile Picture`}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
        ) : (
          <div className="rounded-full bg-gray-300 w-12 h-12 flex items-center justify-center mr-4">
            <span className="text-gray-500 font-bold text-lg">{user.name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          {session && session.user.id === user.id && (
            <p className="text-gray-600">This is your profile</p>
          )}
        </div>
      </div>
      {/* Additional user info, goals, workouts, etc. can be added here */}
    </div>
  );
}