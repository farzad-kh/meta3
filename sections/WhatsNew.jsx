'use client';
import styles from "@/styles";
import { motion } from "framer-motion";
import { planetVariants } from "@/utils/motion";
import { newFeatures } from '../constants';

import { ExploreCard, NewFeatures, TitleText, TypingText } from '../components';
const WhatsNew = () => (
  <section className={`sm:py-[4.5rem] py-6 sm:px-16 px-6 z-10 relative `}>

    <motion.div
    variants="hidden"
      inherit="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-8 justify-between mt-10`}
    >
      <div className="flex flex-col lg:flex-[0.5] flex-[0.5] flex-wrap lg:p-8 p-0  lg:items-baseline items-center   ">

        <TypingText title="| What's new ?" textStyles=" text-left" />
        <TitleText
          title={<>What's new about metaverse</>}

          textStyles="md:text-left text-center !leading-[1.1]    "
        />

        <div

          className="flex flex-col mt-5  "
        >

          <ul className="flex flex-row gap-6 mt-6 ">
            <div className="gradient-03 !left-auto right-0 sm:top-[5%] !top-[45%]" />
            {newFeatures.map((item, i) => (
              <NewFeatures
                key={i}

                {...item}
              />
            ))}

          </ul>

        </div>
      </div>
      <div className="flex-[0.6] relative lg:h-2/4 h-1/2 flex justify-center items-center  ">

        <motion.div
          className="lg:w-[90%] md:w-[100%] w-[90%] "

          variants={planetVariants("right")}
          initial={planetVariants("right").hidden}
          whileInView={planetVariants("right").show}
          viewport={{ once: false }}
        >

          <img className="object-contain w-full h-full" src="./whats-new.png" />
        </motion.div>

      </div>
    </motion.div>
  </section>
);

export default WhatsNew;
