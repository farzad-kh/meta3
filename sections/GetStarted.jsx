'use client';

import styles from "@/styles";
import { motion } from "framer-motion";
import { planetVariants } from "@/utils/motion";
import { startingFeatures } from '../constants';
import { ExploreCard, StartSteps, TitleText, TypingText } from '../components';
console.log(startingFeatures);
const GetStarted = () => (
  <section className={`sm:py-[4.5rem] py-6 sm:px-16 px-6 z-10 relative `}>
 
    <motion.div
      inherit="hidden"
      whileInView="show"
      viewport={{once:false}}
      className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-8 justify-between mt-10`}
    >
      <div  className="flex-[0.6] relative lg:h-2/4 h-1/2 flex justify-center items-center  ">
        
      <motion.div
      className="lg:w-[90%] md:w-[100%] w-[90%] "
       
        variants={planetVariants("left")}
        initial={planetVariants("left").hidden}
        whileInView={planetVariants("left").show}
        viewport={{once:false}}
      >
        
        <img className="object-contain w-full h-full" src="./get-started.png" />
      </motion.div> 
    
      </div>
     
     
      <div className="flex flex-col lg:flex-[0.5] flex-[0.5] flex-wrap lg:p-8 p-0  lg:items-baseline items-center   ">

        <TypingText  title="| How metaverse works" textStyles=" text-left" />
        <TitleText
          title={<>Get started with just a few click clicks</>}

          textStyles="md:text-left text-center !leading-[1.1]   "
        />
        
        <div
          initial="hidden"
          whileInView="show"

          className="flex flex-col mt-5  "
        >
          
          <ul className="flex flex-col gap-6 mt-5 la">
          <div className="gradient-03 !left-auto right-0"/>
            {startingFeatures.map((item, i) => (
              <StartSteps
                key={item}
                number={i + 1}
                text={item}
              />
            ))}
          
          </ul>

        </div>
      </div>

    </motion.div>
  </section>
);

export default GetStarted;
