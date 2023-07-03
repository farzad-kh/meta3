'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { showMapMotion, flip } from '../utils/motion';

import { exploreWorlds } from '@/constants';

import PlayerOnlineCard from '@/components/PlayerOnlineCard';
const  createRandomNumbers =()=> {
  let number1 = Math.floor(Math.random() * 5); // اعداد تصادفی بین 0 و 4
  let number2 = Math.floor(Math.random() * 5);

  // بررسی تا اطمینان حاصل شود که عدد‌ها متفاوت اند
  while (number1 === number2) {
    number2 = Math.floor(Math.random() * 5);
  }

  return [number1, number2];
}

// استفاده از تابع
let numbers = createRandomNumbers();
console.log(numbers);
const World = () => 
  // const selectedItems = Array.from(exploreWorlds, (item, index) => index < 2 ? item : undefined).filter(Boolean);



  (

    <section className={`sm:py-[4.5rem] py-6 sm:px-16 px-6 z-10 relative `}>

      <motion.div
        initial="hiden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-8 justify-between mt-10`}
      >
        <div className="flex flex-col w-full justify-center items-center  flex-wrap lg:p-8 p-0    ">

          <div className="lg:max-w-[74%] max-w-full lg:px-8 p-4">
            <TypingText title="| People on the world" textStyles=" text-center" />
            <TitleText
              title={<>Track friends around you and invite them to play together in the same
                world</>}

              textStyles="text-center  !leading-[1.1]  "
            />
          </div>
          <motion.div
          variants={showMapMotion()}
          initial={showMapMotion().hidden}
          whileInView={showMapMotion().show}
      



            className="relative mt-[68px] flex w-full h-[550px]"
          >
            <img src="/map.png" alt="map" className="w-full h-full object-cover" />

            <motion.div
                 variants={flip(1)}
              initial={flip(1).hidden}
              whileInView={flip(1).show}


              className="absolute md:bottom-20  bottom-32 right-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] shadow-light-orange">
              <img src="people-01.png" alt="people" className="w-full h-full" />
            </motion.div>

            <motion.div
             variants={flip(3)}
              initial={flip(3).hidden}
              whileInView={flip(3).show}
              className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] shadow-pink ">
              <img src="/people-02.png" alt="people" className="w-full h-full" />
            </motion.div>

            <motion.div
             variants={flip(2)}
              initial={flip(2).hidden}
              whileInView={flip(2).show}

              className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] shadow-light-blue ">
              <img src="people-03.png" alt="people" className="w-full h-full" />
            </motion.div>

            {/* transition={{delay:0.1 * index}}
       initial={{opacity:0,y:28}}
       animate={{opacity:1,y:20}}
       exit={{opacity:0,y:20}} */}


            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}

              className='top-[36%] left-[11%] lg:flex hidden  flex-col absolute w-[16%] h-[28%] rounded-lg overflow-hidden shadow-light-blue  '>


              <PlayerOnlineCard
                key={0}
                title={exploreWorlds[0].title}
                imgUrl={exploreWorlds[0].imgUrl}
                player={exploreWorlds[0].player}
              />

            </motion.div>





            <motion.div

              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }
            }
              className='top-[10%] left-[60%] lg:flex hidden flex-col absolute w-[16%] h-[28%] rounded-lg overflow-hidden shadow-purple '>


              <PlayerOnlineCard
                key={1}
                title={exploreWorlds[1].title}
                imgUrl={exploreWorlds[1].imgUrl}
                player={exploreWorlds[1].player}
              />

            </motion.div>


          </motion.div>


        </div>





      </motion.div>

      {/* {exploreWorlds.map((player, index) =>
              <playerOnlineCard
                key={index}
                {...player}
              />

            )} */}

    </section>

  );


export default World;
