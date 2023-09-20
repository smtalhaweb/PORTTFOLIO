import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,description,technologies }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-100 transition duration-700 z-30 flex flex-col justify-center bg-grey items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-3xl font-bold">{title}</p>
        <p className="mt-7 text-2xl font-bold">{description}</p>
        <p className="mt-7 text-2xl font-bold">{technologies}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};
// p30 m20 md m20
//p10 mx auto md m20
const Projects = () => {
  return (
    <section id="projects" className="md:m-10 p-20 sm:px-30 py-20">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          All Projects uses the Web App Technologies:
          <br />{" "}
          <span className="text-red">
            HTML CSS TAILWIND-CSS JAVASCRIPT REACT TYPESCRIPT FRAMER MOTION
            SMOOTH SCROLLING etc......
          </span>
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            description="AMAZON CLONE"
            technologies="HTML & CSS"
          />
          <Project
            title="Project 2"
            description="BUBBLE GAME"
            technologies="HTML CSS & JAVASCRIPT"
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            description="TO-DO LIST"
            technologies="HTML CSS & JAVASCRIPT"
          />
          <Project
            title="Project 4"
            description="PDF MERGER"
            technologies="HTML CSS JS & PDF TOOLS"
          />
          <Project
            title="Project 5"
            description="GYM FITNESS"
            technologies="HTML CSS TAILWIND-CSS JS REACT TYPESCRIPT FRAMER-MOTION SMOOTH-SCROLL"
          />

          {/* ROW 3 */}
          <Project
            title="Project 6"
            description="MY PORTFOLIO"
            technologies="HTML CSS TAILWIND-CSS JS REACT FRAMER-MOTION SMOOTH-SCROLL"
          />
          <Project
            title="Project 7"
            description="CAR RENTAL"
            technologies="HTML CSS TAILWIND-CSS JS REACT TYPESCRIPT FRAMER-MOTION SMOOTH-SCROLL"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
