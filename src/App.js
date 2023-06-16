import React from 'react'; // Import von React
// components
import Banner from './components/Banner'; // Import der Banner-Komponente
import Header from './components/Header'; // Import der Header-Komponente
import Nav from './components/Nav'; // Import der Nav-Komponente
import About from './components/About'; // Import der About-Komponente
import Services from './components/Services'; // Import der Services-Komponente
import Work from './components/Work'; // Import der Work-Komponente
import Contact from './components/Contact'; // Import der Contact-Komponente

const App = () => { // Funktionale Komponente "App"
  return (
    <div className='bg bg-site bg-no-repeat bg-cover overflow-hidden'> {/* Hintergrundcontainer mit bestimmten Klassen */}
      <Header /> {/* Header-Komponente */}
      <Banner /> {/* Banner-Komponente */}
      <Nav /> {/* Nav-Komponente */}
      <About /> {/* About-Komponente */}
      <Services /> {/* Services-Komponente */}
      <Work /> {/* Work-Komponente */}
      <Contact /> {/* Contact-Komponente */}
      <div className='h-[4000px]'></div> {/* Platzhalterdiv mit einer bestimmten Höhe */}
    </div>
  );
};

export default App; // Export der App-Komponente als Standard