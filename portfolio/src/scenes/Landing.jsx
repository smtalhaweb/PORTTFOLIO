import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";
const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:mt-32 md:p-30 py-20 mx-auto"
    >
      {/* IMAGE SECTION */}
      <motion.div
        className="md:order-2 flex justify-center md:ml-20 z-10 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {isAboveMediumScreens ? (
          <div className="relative z-10 before:absolute before:-top-10 before:left-20 before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              className="hover:filter hover:saturate-200 transition duration-500 z-10 md:ml-40 w-full max-w-[300px] md:max-w-[400px]"
              src="assets/profile-image.png"
              alt="profile-pic"
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px] ml-10"
            src="./assets/profile-image.png"
            alt="profile-pic"
          />
        )}
      </motion.div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/3 mt-20 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl md:text-5xl font-playfair z-10 md:ml-20 ml-10 text-center md:text-start">
            S.M {""}
            <span className="text-red">
              TALHA
            </span>
          </p>
          <p className="mt-12 mb-7 text-md ml-10 text-center md:ml-20 md:text-start">
            FRONT END WEB-DEVELOPER
          </p>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start md:ml-20 ml-10 gap-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-light-blue hover:bg-pink-500 text-white px-2 py-1 font-semibold rounded-sm transition duration-500"
            href="#contact"
            onClick={() => setSelectedPage("contact")}
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="bg-light-blue hover:bg-pink-500 font-semibold px-2 py-1 rounded-sm transition duration-700"
            href="#contact"
            onClick={() => setSelectedPage("contact")}
          >
            Lets talk
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center ml-10 md:justify-start md:ml-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
