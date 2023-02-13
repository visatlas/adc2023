import { useRouter } from 'next/router';
import Header from './header';

const Layout = ({ children }: { children: React.ReactNode; }) => {
  const router = useRouter();

  return (<>
    {router.asPath !== "/" && (
      <Header />
    )}
    <main className="bg-gray-50 max-w-[70em] w-[70em] min-h-[500px] mx-auto relative">
      {children}
    </main>
  </>);
};

export default Layout;
