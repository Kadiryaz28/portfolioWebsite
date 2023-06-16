import React from 'react'; // Import der React-Bibliothek
import Logo from '../assets/PNG_1-removebg-preview.png' // Import des Logo-Bildes

const Header = () => { // Funktionale Komponente "Header"
  return (
   <header className='py-8'> {/* Header-Element mit Padding-Top von 8 */}
   <div className='container mx-auto'> {/* Container mit automatischem Margin */}
    <div className='flex justify-between items center'> {/* Flex-Container mit zentrierter Ausrichtung */}
      <a href='#'> {/* Link zur Startseite */}
        <img src={Logo} width={150} alt=''/> {/* Logo-Bild */}
      </a>
      <button className='btn btn-sm'>Kontakt</button> {/* Button mit CSS-Klassen */}
    </div>
   </div>
  </header>
  );
};

export default Header; // Export der Header-Komponente als Standard