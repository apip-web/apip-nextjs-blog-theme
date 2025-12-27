import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <main className={`${geist.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
