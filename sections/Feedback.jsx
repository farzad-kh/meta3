'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`sm:py-[4.5rem] py-6 sm:px-16 px-6 z-10 relative `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex md:flex-row flex-col gap-8  mt-10  justify-center `}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className=" flex-[0.5]  lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Samantha
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder Metaverus
          </p>
        </div>
    <div className="feedback-gradient ">

    </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 3.0. by using
          metaverse you can use it as anything”
        </p>
      </motion.div>










      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-[0.5]  flex justify-center items-center"
      >
        <img 
          src="/planet-09.png"
          alt="planet-09"
          className="w-full h-full  md:object-cover object-contain rounded-[40px]  lg:object-[unset] object-left"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;