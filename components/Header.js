import { getGlobalData } from '../utils/global-data';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { name, authorAvatar } = getGlobalData();
  const [firstName, lastName] = name.split(' ');

  return (
    <header className="not-prose pt-20 pb-12 flex flex-col items-center">
      <div className="relative w-20 h-20 mb-4">
        {/* Lingkaran blur sebagai border */}
        <div className="absolute inset-0 rounded-full bg-conic-180 from-gradient-3 from-0% to-gradient-4 to-100% blur-[8px]" />
        {/* Avatar */}
        <Image
          src={authorAvatar}
          alt={name}
          fill
          className="relative rounded-full border-4 border-white dark:border-black object-cover"
          unoptimized
        />
      </div>

      {/* Nama author */}
      <p className="header-author text-center dark:text-white">
        <Link href="/">
          {firstName}{' '}
          <span className="text-red-500">{lastName}</span>
        </Link>
      </p>
    </header>
  );
}
