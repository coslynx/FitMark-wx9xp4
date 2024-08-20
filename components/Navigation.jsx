'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/goals', label: 'Goals' },
  { href: '/workouts', label: 'Workouts' },
  { href: '/profile', label: 'Profile' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-center gap-4">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`
                ${pathname === item.href ? 'text-blue-500' : ''}
                font-medium text-lg
              `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}