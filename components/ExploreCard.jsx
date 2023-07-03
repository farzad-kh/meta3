'use client';

import React from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';
const ExploreCard = ({ id, imgUrl, title, index, active, activeClick }) => {
  console.log(active)
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}

      className={` overflow-hidden flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer
       relative ${active === index ? 'lg:flex-[2.5] flex-[10] ' : 'lg:flex-[0.5] flex-[2]'
        } `}
      onClick={() => activeClick(index)}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== index ? (
        <motion.h3
          transition={{ delay: 0.6, ease: "linear", duration: 0.4 }}

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" pb-3  font-semibold sm:text-2xl text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </motion.h3>
      ) : (
        <motion.div
          transition={{
            delay: 0.2, ease: "linear",
            opacity: { duration: 0.3 },
            y: { duration: 0.4 }

          }}

          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}

          className="absolute bottom-0  lg:p-8 p-4 flex  w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] lg:h-auto h-32 lg:justify-end justify-center  ">
          <div
            className={`${styles.flexCenter} lg:w-14 lg:h-14 w-8 h-8 rounded-[24px] glassmorphism translate-y-[-9px] `}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enter Metaverse
          </p>
          <h2



            className="lg:mt-6 mt-2 font-semibold lg:text-[32px] text-[20px] text-white">
            {title}
          </h2>
        </motion.div>
      )
      }
    </motion.div >
  );
};

export default ExploreCard;