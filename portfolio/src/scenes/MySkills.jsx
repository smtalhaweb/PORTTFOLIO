import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="skills"
      className=" mx-auto md:m-20 md:p-30 pt-20 pb-20 ml-10 mr-10"
    >
        <div className="md:flex md:justify-between md:gap-16 ">
          <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              MY <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="w-1/3" />
            <p className="mt-10 mb-7">HTML, CSS, JS,REACT ,TYPESCRIPT</p>
          </motion.div>
          <div className="mt-16 md:mt-0">
            {isAboveMediumScreens ? (
              <div className="relative z-0 ml-20 md:mt-10 before:absolute before:-top-5 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                <img
                  className="z-10 "
                  src="assets/skills-image.png"
                  alt="Skills"
                />
              </div>
            ) : (
              <img
                className="z-10"
                src="assets/skills-image.png"
                alt="Skills"
              />
            )}
          </div>
        </div>
        {/* SKILLS */}
        <div className="md:flex md:justify-between mt-16 gap-20">
          {/* EXPERIENCE */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">01</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  EXPERIENCE
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"></div>
            </div>
            <p className="mt-10 text-blue">
              <ul className="list-disc">
                <li>
                  Eager to apply my knowledge and skills in front-end
                  development gained through personal projects.
                </li>
                <li>
                  Passionate about web development with hands-on experience in
                  creating responsive and user-friendly websites.
                </li>
                <li>
                  Familiar with HTML, CSS, JavaScript,React,
                  TypeScript,Framer-Motion,Smooth-Scrolling through practical
                  projects, ready to tackle new challenges.
                </li>
                <li>
                  Dedicated self-starter with a drive to gain practical
                  experience in front-end development.
                </li>
                <li>
                  Keen interest in web development and a willingness to learn
                  and grow within a professional environment.
                </li>
              </ul>
            </p>
          </motion.div>
          {/* INNOVATIVE   */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">02</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  IMAGINATIVE
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"></div>
            </div>
            <p className="mt-10 text-red">
              <ul className="list-disc">
                <li>
                  As a creative thinker, I enjoy conceptualizing unique design
                  concepts for websites.
                </li>
                <li>
                  Passionate about using my imagination to craft visually
                  appealing and user-centric web interfaces.
                </li>
                <li>
                  Excited to turn abstract design ideas into tangible and
                  interactive web experiences.
                </li>
                <li>
                  Adept at brainstorming imaginative solutions for user
                  interface challenges.
                </li>
                <li>
                  Ready to bring my imaginative ideas to life through front-end
                  development.
                </li>
              </ul>
            </p>
          </motion.div>
          {/* IMAGINATIVE */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">03</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  INNOVATIVE
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"></div>
            </div>
            <p className="mt-10 text-yellow">
              <ul className="list-disc">
                <li>
                  Enthusiastic about exploring innovative solutions in web
                  design and development.
                </li>
                <li>
                  Excited to bring fresh and creative ideas to front-end
                  projects.
                </li>
                <li>
                  Able to think outside the box and adapt to the latest trends
                  in web design.
                </li>
                <li>
                  Committed to finding inventive solutions for user experience
                  enhancements.
                </li>
                <li>
                  Eager to contribute imaginative design elements to web
                  development projects.
                </li>
              </ul>
            </p>
          </motion.div>
        </div>
    </section>
  );
};

export default MySkills;
