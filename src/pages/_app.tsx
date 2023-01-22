import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Component {...pageProps} key={router.route} />
      <Footer />
    </div>
  );
}
export default MyApp;
