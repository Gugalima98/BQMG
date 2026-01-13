import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* Scroll to top on route change (for React Router v6 data routers, but works with simple scroll restoration component pattern usually, here relying on window scrollTo in useEffect in App or similar if needed, but ScrollRestoration is specific to data routers. For HashRouter, simple useEffect in App is better. Removed ScrollRestoration component to avoid confusion with HashRouter without data API) */}
    </div>
  );
};

export default Layout;