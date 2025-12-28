import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name, authorImg }) {
  const [firstName, lastName] = name.split(' ');

  return (
    <header className="pt-20 pb-12 flex flex-col items-center">
      {/* Lingkaran warna blur sebagai border */}
      <div className="relative w-20 h-20 mb-4">
        <div className="absolute inset-0 rounded-full bg-conic-180 from-gradient-3 from-0% to-gradient-4 to-100% blur-[8px]" />
        {authorImg && (
          <Image
            src={authorAvatar}
            alt={name}
            width={80}
            height={80}
            className="relative rounded-full border-4 border-white dark:border-black"
            unoptimized
          />
        )}
      </div>

      {/* Nama author */}
      <p className="header-author text-2xl text-center dark:text-white font-semibold">
        <Link href="/">
          {firstName}{' '}
          <span className="text-red-500">{lastName}</span>
        </Link>
      </p>
    </header>
  );
}
