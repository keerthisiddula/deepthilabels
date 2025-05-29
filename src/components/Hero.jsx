import styles from '../style'
import { discount, robot } from '../assets'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      {/* Image on the Left */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='label printer'
          className='w-[85%] h-[80%] relative z-[5] mr-10 rounded-xl'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* Text on the Right */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-col w-full mt-0 mr-10'>
          <h1 className='font-poppins font-semibold ss:text-[68px] text-[48px] text-white ss:leading-[100.8px] leading-[75px]'>
            Creating
          </h1>
          <h1 className='font-poppins font-semibold ss:text-[68px] text-[48px] text-gradient ss:leading-[100.8px] leading-[75px] whitespace-nowrap'>
            Custom Labels
          </h1>
          <h1 className='font-poppins font-semibold ss:text-[68px] text-[48px] text-white ss:leading-[100px] leading-[75px] w-full'>
            with precision.
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[450px] mt-5 font-normal`}>
          Delivering high-quality, tailor-made labels that 
          bring your brand’s vision to life with unmatched accuracy and style.  
        </p>
      </div>

    </section>
  )
}

export default Hero
