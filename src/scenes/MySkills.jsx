import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-white">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            As a highly skilled full-stack developer specializing in the MERN
            (MongoDB, Express.js, React.js, Node.js) stack, I possess a
            comprehensive understanding of both frontend and backend
            development. With extensive experience in creating robust and
            efficient web applications, I excel in delivering end-to-end
            solutions that meet client requirements while adhering to industry
            best practices.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
            // className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            // before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src="assets/full-stack.png" />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Frontend
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-amber-500	 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            React.js enables me to develop highly interactive user interfaces
            with smooth navigation and optimal performance. I have a strong
            command of modern JavaScript frameworks and libraries, allowing me
            to implement responsive designs, integrate third-party APIs, and
            ensure cross-browser compatibility. Additionally, my expertise in
            HTML5, CSS3, and JavaScript allows me to create visually appealing
            and user-friendly interfaces.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Backend
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-lime-400 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I am skilled in utilizing Express.js and Node.js to build scalable
            and secure server-side applications. I have hands-on experience in
            developing RESTful APIs, managing databases, and implementing
            authentication and authorization protocols. Furthermore, my
            proficiency in MongoDB enables me to design efficient data models
            and perform database operations, ensuring data integrity and
            high-performance data retrieval.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Additional Tool
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-cyan-500 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Python, Django, Flask, C++, PHP, Java, jQuery, Angular, SQL,
            MySQL,PostgreSQL, Sass, Material UI, Tailwind.
          </p>
        </motion.div>
        {/* IMAGINATIVE
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">04</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in
            curabitur. Lectus libero, egestas enim aliquam quis felis amet.
            Sagittis, amet netus fringilla netus lobortis odio sed platea.
            Bibendum.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default MySkills;
