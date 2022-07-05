import React from 'react';
import CardExpand from './components/CardExpand';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import HeadFirstSection from './sections/HeadFirstSection';
import ServiceSection from './sections/ServiceSection';

function App() {
  return (
    <div>
      <Header />
      <HeadFirstSection />
      <CardExpand />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
