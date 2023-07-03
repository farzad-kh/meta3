'use client';


import { motion } from 'framer-motion';
import { textContainerIndex, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p

    initial="hidden"
    whileInView="show"

    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {[...title].map((letter, index) => (
      <motion.span className='text-slate-400 text-xl gradient-text'
       variants={textContainerIndex(index)} 
       initial={textContainerIndex(index).offscreen}
      whileInView={textContainerIndex(index).onscreen}

       key={index}>
        {letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{once:false}}
    className={`mt-[8px] font-bold lg:text-6xl text-[40px] !leading-[1.1]  text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);



// 'use client';
// import { motion } from 'framer-motion';

// import { textContainerIndex, textVariant2 } from '../utils/motion';



// const TypingText = ({ title, textStyles }) => (

//   <motion.p
//     inherit="hidden"
//     whileInView="show"


//     className={`font-normal text-[18px] text-gray-900 text-secondary-white text-center`}
//   >

//     {[...title].map((letter, index) => (
//       <motion.span
//         className='text-amber-700'
//         variants={textContainerIndex(index)}
//         initial={textContainerIndex(index).offscreen}
//         whileInView={textContainerIndex(index).onscreen}


//       >
//         {letter}
//       </motion.span>
//     ))}
//   </motion.p>

// )


// const TitleText = ({ title, textStyles }) => {
//   return <motion.h2
//     variants={textVariant2}
//     initial="hidden"
//     whileInView="show"
//     className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-red-950 ${textStyles}`}
//   >
//     {title}
//   </motion.h2>

// }

// export { TypingText, TitleText };