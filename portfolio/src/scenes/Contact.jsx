import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className="mx-auto md:m-20 md:p-30 pt-20 pb-20 ml-10 mr-10">
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
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">Contact Me</span> To Get Started
          </p>
          <div className="flex my-5">
            <LineGradient width="w-1/3" />
          </div>
          <p className="mt-10">HTML, CSS, JS,REACT ,TYPESCRIPT</p>
        </div>
      </motion.div>
      {/* FORM AND IMAGE SECTION */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form target="_blank" method="POST" onSubmit={onSubmit} action="">
            {/* NAME BLOCK */}
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 rounded-md"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" && "Max Length is 100 char."}
              </p>
            )}
            {/* EMAIL BLOCK */}
            <input
              className="w-full bg-blue font-semibold mt-5 placeholder-opaque-black p-3 rounded-md"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "invalid email address."}
              </p>
            )}
            {/* FOR MESSAGE BLOCK   */}
            <textarea
              className="w-full bg-blue font-semibold mt-5 placeholder-opaque-black p-3 rounded-md"
              placeholder="MESSAGE"
              rows={5}
              cols={4}
              {...register("message", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "max length has 2000 characters."}
              </p>
            )}
            <button
              type="submit"
              className="mt-1 rounded-lg bg-blue px-20 py-3 transition duration-500 hover:bg-red hover:text-white"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
