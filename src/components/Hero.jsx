import styles from '../style';
import { robot } from '../assets';

const Hero = () => {
  return (
    <section id="home" className={`${styles.paddingY}`}>
      {/* Container for consistent horizontal spacing */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-16 flex md:flex-row flex-col items-center">
        
        {/* Left: Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={robot}
            alt="label printer"
            className="
              mt-24 mb-1
              w-[280px] h-[180px]  /* Mobile default smaller size */
              sm:w-[380px] sm:h-[260px] /* Slightly bigger on small screens */
              md:w-[480px] md:h-[320px] /* Desktop size */
              rounded-xl
            "
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center mt-12 md:mt-24 md:pl-12 text-center md:text-left">
          <h1 className="font-poppins font-semibold text-white text-[48px] ss:text-[62px] leading-[75px] ss:leading-[100.8px]">
            Creating
          </h1>
          <h1 className="font-poppins font-semibold text-gradient text-[48px] ss:text-[62px] leading-[75px] ss:leading-[100.8px] whitespace-nowrap">
            Custom Labels
          </h1>
          <h1 className="font-poppins font-semibold text-white text-[48px] ss:text-[62px] leading-[75px] ss:leading-[100.8px] w-full">
            with precision.
          </h1>

          <p className="mt-4 max-w-[450px] mx-auto md:mx-0 text-[15px] font-normal text-white">
            Delivering high-quality, tailor-made labels that bring your brand’s
            vision to life with unmatched accuracy and style.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
