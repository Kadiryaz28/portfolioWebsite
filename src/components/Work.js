import React from "react"; // Import von React
import { motion } from "framer-motion"; // Import von Framer Motion
import { fadeIn } from "../variants"; // Import der fadeIn-Variante
import Img1 from "../assets/Selin.png"; // Import des ersten Bildes
import Img2 from "../assets/Confec.png"; // Import des zweiten Bildes
import Img3 from "../assets/AYOS.png" ; // Import des dritten Bildes

const Work = () => { // Funktionale Komponente "Work"
  return (
    <section className="section" id="work"> {/* Abschnitt mit der ID "work" */}
      <div className="container mx-auto"> {/* Container mit automatischem Margin */}
        <div className="flex flex-col lg:flex-row gap-x-10"> {/* Flex-Container mit Spaltenanordnung und Abstand für den Desktop */}
          <motion.div
            variants={fadeIn("right", 0.5)} // Framer Motion-Varianten für Einblendeffekte
            initial="hidden" // Anfangszustand der Animation
            whileInView={"show"} // Animation, wenn das Element im sichtbaren Bereich ist
            viewport={{ once: false, amount: 0.3 }} // Einstellungen für den Sichtbarkeitsbereich
            className="flex-1 flex flex-col gap-y-28 mb-20 lg:mb-0" // Klassen für den Container
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Meine letzten <br />
                Projekte
              </h2> {/* Überschrift */}
              <p className="max-w-sm mb-16">
                Hier können Sie meine letzten Projekte sehen
              </p> {/* Text */}
              <button className="btn btn-sm">Zeige alle Projekte</button> {/* Button */}
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1"> {/* Container für das Bild */}
              {/* overlay */}
              <div className="group-hover: bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div> {/* Überlagerung */}
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500" // Klassen für das Bild
                src={Img1} // Bildquelle
                alt="" // Alternativer Text für das Bild
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Selin International</span> {/* Vortitel */}
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Orthopädische Schlafsysteme</span> {/* Titel */}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)} // Framer Motion-Varianten für Einblendeffekte
            initial="hidden" // Anfangszustand der Animation
            whileInView={"show"} // Animation, wenn das Element im sichtbaren Bereich ist
            viewport={{ once: false, amount: 0.3 }} // Einstellungen für den Sichtbarkeitsbereich
            className="flex-1 flex flex-col gap-y-10" // Klassen für den Container
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1 mt-12"> {/* Container für das Bild */}
              {/* overlay */}
              <div className="group-hover: bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div> {/* Überlagerung */}
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500" // Klassen für das Bild
                src={Img2} // Bildquelle
                alt="" // Alternativer Text für das Bild
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">CONFEC-Logistik</span> {/* Vortitel */}
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Süßwarenkonfektionierer</span> {/* Titel */}
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1"> {/* Container für das Bild */}
              {/* overlay */}
              <div className="group-hover: bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div> {/* Überlagerung */}
              {/* img */}
              <a href="https://confec-logistik.de">
              <img
                className="group-hover:scale-125 transition-all duration-500" // Klassen für das Bild
                src={Img3} // Bildquelle
                alt="" // Alternativer Text für das Bild
              />
              </a>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">AYOS Solutions</span> {/* Vortitel */}
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Terassen- und Gartenbau</span> {/* Titel */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work; // Export der Work-Komponente als Standard