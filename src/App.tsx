import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import LocationPage from './pages/LocationPage';

// Simple scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="contato" element={<Contact />} />
          <Route path="servicos" element={<Services />} />
          <Route path="atuacao/:slug" element={<LocationPage />} />
          {/* A rota genérica deve ser a última a ser declarada */}
          <Route path=":slug" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;