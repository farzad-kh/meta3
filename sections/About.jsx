'use client';
import React from 'react';
import { delay, easeIn, motion, useInView } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
// const cardVariants = {
//   offscreen: {
//     y: 100,
//     opacity: 0,
//     x:0

//   },
//   onscreen: {
//     y: 0,
//     x:0,
//     opacity: 1,
//     transition: {
//       type: "tween",

//       duration: 1,
//       delay: 0.1,
//       ease: "easeOut"

//     }
//   }
// initial={cardVariants.offscreen}
// whileInView={cardVariants.onscreen}
// viewport={{ once: false }}
// };



const About = () => {

  

  
  return (
    <section  className={`sm:py-[4.5rem] py-6 sm:px-16 px-6 relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText   title="| About Metaversus" textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.1, 1)}


          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white z-30 text-slate-400"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it's really real, you can feel what you feel in this metaverse
          world, because this is really the{' '}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{' '}
          of today, using only{' '}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let's{' '}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default About;