import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  React.useEffect(() => {
    if (title) {
      document.title = `${title} | PureShine Cleaners`;
    }
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-grow pt-[104px] md:pt-[136px]"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
