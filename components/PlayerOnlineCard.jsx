'use client';
import React from 'react';

import { motion } from 'framer-motion';
import { flip } from '@/utils/motion';


const PlayerOnlineCard = ({ imgUrl, title, player, }) => {


    return (
        <div 
      
        >
            <div className='h-full absolute'>
                <img className='object-cover w-full h-full ' src={imgUrl} />

            </div>
            <div className='bottom-[30%] left-2  absolute flex  items-center'>
                <div className="avatar-group -space-x-3 ">
                    <div className="avatar border ">
                        <div className="w-7">
                            <img src="people-02.png" />
                        </div>
                    </div>
                    <div className="avatar border ">
                        <div className="w-7">
                            <img src="people-03.png" />
                        </div>
                    </div>
                    <div className="avatar border ">
                        <div className="w-7">
                            <img src="people-01.png" />
                        </div>
                    </div>
                    <div className="avatar border  placeholder w-[30px]  bg-[rgba(0,0,0,.7)]">
                        <div className="    text-neutral-content">
                            <span className='text-xs'>+{player - 3}</span>
                        </div>
                    </div>
                </div>
                <p className='ml-1 text-xs text-slate-200'>{player} people joined</p>
            </div>
            <h3 className='absolute bottom-4 left-2 text-white text-base'>{title}</h3>
        </div>
    );
};

export default PlayerOnlineCard;