import React from "react"; // Import von React
import { BsArrowUpRight } from "react-icons/bs"; // Import des React-Icons
import { motion } from "framer-motion"; // Import von Framer Motion
import { fadeIn } from "../variants"; // Import der fadeIn-Variante

const services = [
  // Array mit Service-Objekten
  {
    name: "Webdesign",
    description: "Ich erstelle Webseiten",
    link: "Mehr dazu",
  },
  {
    name: "App-Entwicklung",
    description: "Ich erstelle mobile Anwendungen",
    link: "Mehr dazu",
  },
  {
    name: "UX/ UI Design",
    description: "Ich entwerfe Komponenten für UX/UI",
    link: "Mehr dazu",
  },
];

const Services = () => {
  // Funktionale Komponente "Services"
  return (
    <section className="section" id="services">
      {" "}
      {/* Abschnitt mit der ID "services" */}
      <div className="container mx-auto">
        {" "}
        {/* Container mit automatischem Margin */}
        <div className="flex flex-col lg:flex-row">
          {" "}
          {/* Flex-Container mit Spaltenanordnung für den Desktop */}
          {/* text und image */}
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)} // Framer Motion-Varianten für Einblendeffekte
            initial="hidden" // Anfangszustand der Animation
            whileInView={"show"} // Animation, wenn das Element im sichtbaren Bereich ist
            viewport={{ once: false, amount: 0.3 }} // Einstellungen für den Sichtbarkeitsbereich
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0" // Klassen für den Container
          >
            <h2 className="h2 text-accemt mb-6">Was ich mache.</h2>{" "}
            {/* Überschrift */}
            <h3 className="h3 max-w-[455px] mb-16">
              {" "}
              {/* Unterüberschrift */}
              Webdesign
              <br />
              App-Entwicklung
              <br />
              UI-Design
            </h3>
            <button className="btn btn-sm">Meine Arbeit</button> {/* Button */}
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)} // Framer Motion-Varianten für Einblendeffekte
            initial="hidden" // Anfangszustand der Animation
            whileInView={"show"} // Animation, wenn das Element im sichtbaren Bereich ist
            viewport={{ once: false, amount: 0.3 }} // Einstellungen für den Sichtbarkeitsbereich
            className="flex-1" // Klassen für den Container
          >
            {/* service liste */}
            <div>
              {services.map((service, index) => {
                // Mapping über die Services-Liste
                {
                  /* destructure service */
                }
                const { name, description, link } = service; // Destrukturierung des Service-Objekts
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex" // Klassen für das Service-Element
                    key={index} // Schlüssel für das Mapping
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>{" "}
                      {/* Überschrift des Services */}
                      <p className="font-secondary leading-right">
                        {description}
                      </p>{" "}
                      {/* Beschreibung des Services */}
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[40px] flex justify-center items-center" // Klassen für den Button
                      >
                        <BsArrowUpRight /> {/* Icon für den Button */}
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>{" "}
                      {/* Link-Text */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; // Export der Services-Komponente als Standard
