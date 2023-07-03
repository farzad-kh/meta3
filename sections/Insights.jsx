'use client';

import styles from "../styles/index"
import { motion } from 'framer-motion';


import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
const Insights = () => (
  <section className={`sm:py-[4.5rem] py-6 sm:px-16 px-6 z-10 relative `}>

    <motion.div
      inherit="hidden"
      whileInView="show"
      viewport={{ once: false}}
      className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-8 justify-between mt-10`}
    >
      <div className="flex flex-col w-full  flex-wrap lg:p-8 p-0   items-center   ">

        <TypingText title="| Insight" textStyles=" text-left" />
        <TitleText
          title={<>Insight about metaverse</>}

          textStyles="md:text-left text-center !leading-[1.1]    "
        />

        <div className="mt-[80px] flex flex-col gap-14 items-center justify-center  ">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>






      </div>




    </motion.div>

  </section>
);






export default Insights;