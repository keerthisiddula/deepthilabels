import { motion } from "framer-motion";
import styles from "../style";
import { robot } from "../assets";

const sentences = [
  { id: 1, text: "Creating", className: "text-white" },
  { id: 2, text: "Custom Labels", className: "text-gradient whitespace-nowrap" },
  { id: 3, text: "with precision.", className: "text-white" },
];

const paragraph =
  "Delivering high-quality, tailor-made labels that bring your brand’s vision to life with unmatched accuracy and style.";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const sentenceVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut", delay: 2 },
  },
};

const Hero = () => {
  return (
    <section id="home" className={`${styles.paddingY}`}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-16 flex md:flex-row flex-col items-center">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={robot}
            alt="label printer"
            className="
              mt-24 mb-1 
              md:mr-28
              w-[280px] h-[180px]  
              sm:w-[420px] sm:h-[260px] 
              md:w-[600px] md:h-[320px] 
              rounded-xl
              mx-auto
            "
          />
        </div>

        {/* Right: Text */}
        <motion.div
          className="flex-1 flex flex-col justify-center mt-10 ml-6 mb-2 md:mt-24 md:pl-12 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sentences.map(({ id, text, className }) => (
            <motion.h1
              key={id}
              className={`
                font-poppins font-semibold
                text-[42px] mr-6
                sm:mr-5
                sm:text-[46px]
                md:text-[52px]
                lg:text-[74px]
                xl:text-[76px]
                leading-[32px] mt-5 sm:leading-[44px] md:leading-[60px] lg:leading-[80px] xl:leading-[100px]
                ${className}
                max-w-full
                text-center md:text-left
                md:mr-5
              `}
              variants={sentenceVariants}
            >
              {text}
            </motion.h1>


          ))}

          <motion.p
            className="mt-10 max-w-[450px] mx-auto md:mx-0
              text-[17px] mr-4 sm:text-[14px] md:text-[15px]
              font-normal text-white"
            variants={paragraphVariants}
          >
            {paragraph}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
