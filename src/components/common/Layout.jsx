import React from 'react';
import Footer from '../Footer';
import TopHeader from '../Header/TopHeader';

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <TopHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
