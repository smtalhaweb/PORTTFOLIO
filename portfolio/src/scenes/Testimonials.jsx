import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[300px] h-[350px] flex flex-col justify-center pt-10 mt-40 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
  return (
    <section id="testimonials" className="mx-auto md:m-20 md:p-30 pt-20 pb-20">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
          TESTI <span className="text-red">MONIALS</span>
        </p>
        <LineGradient width=" mx-auto w-1/3" />
        <p className="mt-10">REVEWS OF SOME EXPERIENCED SOFTWARE DEVELOPERS</p>
      </motion.div>
      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-1">
        <motion.div
          className={`bg-blue ${testimonialStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center pt-20 font-playfair text-md">
            "I was impressed by <b>S.M TALHA</b>'s eagerness to learn and adapt.
            With their dedication and enthusiasm, they have great potential to
            become a valuable asset in any team." <br />
            <span className="text-deep-blue">
              A.BASIT KHAN- <br />
              SENIOR DEVELOPER
            </span>
          </p>
        </motion.div>
        <motion.div
          className={`bg-red ${testimonialStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center pt-10 font-playfair text-md">
            "<b>S.M TALHA</b>'s commitment to self-improvement and their passion
            for web development make them a promising talent in the field."{" "}
            <br />
            <span className="text-dark-red">
              M.ZEESHAN- <br />
              SENIOR REACT DEVELOPER
            </span>
          </p>
        </motion.div>
        <motion.div
          className={`bg-yellow ${testimonialStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center pt-10 font-playfair text-md">
            "{"S.M TALHA"}'s positive attitude and willingness to tackle new
            challenges are traits that any employer would value." - <br />
            <span className="text-dark-yellow">
              ZOHAIB AHMED KHAN
              <br />
              SENIOR FULL STACK DEVELOPER
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
