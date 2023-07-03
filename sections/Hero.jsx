'use client';
import react from "react";
import { motion } from "framer-motion";
import styles from "../styles/index"
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
// const heroStyle={
//   y:"sm:py-16 xs:py-8 py-12"
// }
const heroHeading = "font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
const heroDText = "md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]"
const Hero = () =>

  <section className={`sm:py-12 py-6  sm:pl-16 pl-6 `}>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <div className="flex justify-center items-center flex-col z-10 relative mb-4">
        <motion.h1
          variants={textVariant(1)}
          className={`${heroHeading} `}
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.1)}


          className="flex justify-center items-center"
        >
          <h1 className={`${heroHeading}`}>MA</h1>
          <div className={`${heroDText}`}></div>
          <h1 className={`${heroHeading}`}>NESS</h1>

        </motion.div>
      </div>
      <motion.div

        variants={slideIn('right', 'tween', 0.1, 1.2)}
        className="relative  md:mt-5 -mt-3 w-[92%] right-[-10%] "
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]"> </div>
          <img src="/cover.png" alt="cover" className="rounded-tl-[140px] z-10 object-cover relative w-full sm:h-[500px] h-[350px]" />
          <a href="#explore">

            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 ">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
              />
            </div>
          </a>
       
      </motion.div>
    </motion.div>
  </section>
  ;

export default Hero;
