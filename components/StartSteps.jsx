'use client';

const StartSteps = ({ number, text }) => (
  <li className="w-full flex gap-5 items-center">
    <div className="mt-[6px] flex flex-shrink-0 justify-center items-center sm:w-[3.8rem] sm:h-[3.8rem] w-12 h-12 rounded-[24px] glassmorphism translate-y-[-9px]">
      <span className="text-lg text-white font-semibold">{number}</span>
    </div>

    <div className="flex self-baseline pt max-w-[320px] md:text-lg text-base   text-zinc-300"> {text} </div>
  </li>
);

export default StartSteps;
