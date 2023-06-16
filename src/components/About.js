import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

/**
 * Komponente für den "About" Abschnitt.
 * Zeigt Informationen über den Entwickler an.
 * @returns {JSX.Element} - Die About-Komponente.
 */
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* Bild */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Über mich</h2>
            <h3 className="h3 mb-4">
              Ich bin ein Frontend-Entwickler mit 3 Jahren Erfahrung
            </h3>
            <p className="mb-6">
              Durch verschiedene Vorlesungen und Praktika während meines
              gesamten Studiums, konnte ich meine Kenntnisse in verschiedenen
              Programmiersprachen, wie Java, kontinuierlich ausbauen und
              vertiefen und durch die Teilnahme an Praktika praktisch anwenden.
              Das Kernstück meiner Bachelorarbeit ist die Konzeption und
              Entwicklung einer Lernanwendung zur Vermittlung von
              Informatikinhalten, für die die Technologien JavaScript, CSS, HTML
              benutzt wurden. Die wichtigsten Bestandsteile der Bachelorarbeit
              waren die Konzeption, zu der Anforderungen und Diagramme erstellt
              wurden, die Implementation in den obengenannten Technologien und
              ein Usability-Test.
            </p>

            {/* Statistiken */}

            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary  text-sm tracking-[2px]">
                  Jahre <br />
                  Erfahrung
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}+
                </div>
                <div className="font-primary  text-sm tracking-[2px]">
                  Projekte <br />
                  abgeschlossen
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}+
                </div>
                <div className="font-primary  text-sm tracking-[2px]">
                  Zufriedene <br />
                  Kunden
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Kontaktieren Sie mich</button>
              <a href="#" className="text-gradient btn-link">
                Mein Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
