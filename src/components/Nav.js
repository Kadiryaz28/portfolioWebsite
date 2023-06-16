import { BiHomeAlt, BiUser } from "react-icons/bi"; // Import der React Icons
import { BsClipboardData, BsBriefcase, BsChatSquare, BsSquare, BsChatSquareText } from "react-icons/bs"; // Import der React Icons
import { Link } from "react-scroll"; // Import des Link-Komponenten aus react-scroll

const Nav = () => { // Funktionale Komponente "Nav"
  return(
  <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50"> {/* Navigationsleiste mit fest positioniertem, am unteren Rand ausgerichtetem, vollständiger Breite, ausgeblendeten Überlauf und hoher Z-Index */}
    <div className="container mx-auto"> {/* Container mit automatischem Margin */}
      <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] items-center mx-auto px-5 flex justify-between text-2x1 text-white/50"> {/* Flex-Container mit Hintergrundbild, abgerundeten Rändern und horizontaler Ausrichtung */}
      <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"> {/* Link zum Abschnitt "home" mit React-Scroll-Einstellungen */}
        <BiHomeAlt /> {/* Icon für "home" */}
      </Link>
      <Link to='about' activeClass='active' smooth={true} spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"> {/* Link zum Abschnitt "about" mit React-Scroll-Einstellungen */}
        <BiUser /> {/* Icon für "about" */}
      </Link>
      <Link to='services' activeClass='active' smooth={true} spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"> {/* Link zum Abschnitt "services" mit React-Scroll-Einstellungen */}
        <BsClipboardData /> {/* Icon für "services" */}
      </Link>
      <Link to='work' activeClass='active' smooth={true} spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"> {/* Link zum Abschnitt "work" mit React-Scroll-Einstellungen */}
        <BsBriefcase /> {/* Icon für "work" */}
      </Link>
      <Link to='contact' activeClass='active' smooth={true} spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"> {/* Link zum Abschnitt "contact" mit React-Scroll-Einstellungen */}
        <BsChatSquareText /> {/* Icon für "contact" */}
      </Link>
      </div>
    </div>
  </nav>
  );
};

export default Nav; // Export der Nav-Komponente als Standard