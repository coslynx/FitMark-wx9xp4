'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 FitTrack. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          {' | '}
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          {' | '}
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          {' | '}
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}