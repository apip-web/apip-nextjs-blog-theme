import Link from 'next/link';
import Image from 'next/image'; // pastikan pakai Next.js Image

export default function Header({ name, authorImg }) {
  // split name untuk highlight "Web"
  const [firstName, lastName] = name.split(' ');

  return (
    <header className="pt-20 pb-12 flex flex-col items-center">
      {/* lingkaran warna seolah border */}
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full bg-conic-180 from-gradient-3 from-0% to-gradient-4 to-100% blur-[4px]" />
        {authorImg && (
          <Image
            src={"/public/images/avatar.jpg"}
            alt={name}
            width={64}
            height={64}
            className="relative rounded-full border-4 border-white dark:border-black"
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
