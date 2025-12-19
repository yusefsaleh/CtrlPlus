import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Goals from './components/Goals';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Goals />
      <Contact />
    </Layout>
  );
}

export default App;
