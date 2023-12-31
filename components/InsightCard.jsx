'use client';


import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4  xl:max-w-[80%] max-w-full  "
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center ">
      <div className="flex-1 md:ml-12 flex flex-col ">
        <h4 className="font-normal lg:text-3xl text-[26px] text-white lg:max-w-[96%] max-w-full">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-xl text-[14px] text-slate-300 lg:max-w-[92%] max-w-full">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
