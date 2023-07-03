'use client';

const NewFeatures = ({ title, subtitle, imgUrl}) => (
  <li className="w-full flex gap-2 items-center flex-col max-w-full ">
   
    <div className=" py- sm:self-baseline self-[unset]  mt-[6px] flex flex-shrink-0 justify-center items-center sm:w-[3.8rem] sm:h-[3.8rem] w-12 h-12 rounded-[24px] glassmorphism translate-y-[-9px]">
     <img  src={imgUrl}/>
    
    </div>
   <p className="text-white font-semibold text-lg w-full mb-2 sm:text-left text-center">{title}</p>
    <div className="flex  sm:!text-left text-center  sm:max-w-[300px] max-w-full  md:text-lg text-base  text-neutral-300"> {subtitle} </div>
  </li>
);

export default NewFeatures;
