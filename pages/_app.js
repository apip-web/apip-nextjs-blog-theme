import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { Geist } from 'next/font/google';
import Head from 'next/head'; // <-- tambahkan ini

// Definisi Geist
const geist = Geist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-geist',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Bisa juga tambahkan fallback PNG/ICO jika perlu */}
      </Head>

      <span className="theme-bejamas" />
      <main className={`${geist.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
