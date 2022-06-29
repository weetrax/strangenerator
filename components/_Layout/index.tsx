import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react';
import { LoadingScreenProvider } from '../../providers/LoadingScreenProvider';

type _LayoutProps = {
  children: React.ReactNode;
};
const _Layout: React.FC<_LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary-500 font-body text-white">
      <LoadingScreenProvider>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </LoadingScreenProvider>
    </div>
  );
};

export default _Layout;
