export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.1,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  
  
  },
  show: {
    x: 0,
    y: 0,
   
    transition: {
      type,
      delay,
      duration,
      stiffness: 100 ,
      ease: 'easeIn',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.1,
    
      delay,
    },
  },
});



export  const textContainerIndex = (index) => ({

  offscreen: {
    y: 20,
    opacity: 0,
    x: 0

  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.1 * index,
     
      ease: "easeOut"

    }
  }
  })


export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
      type:"tween"
      
     
    },
  },
});

export const planetVariants = (direction) => ({
  hidden: {
    x: direction === 'left' ? '-110%' : '110%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.9,
      delay: 0.5,
      ease:"ease-in"
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const flip = (i) => ({
  hidden: {
    opacity: 0,
    rotateY: 180,
     y: -40
  },
  show: {
    y: 0,
    rotateY: 0,
    opacity: 1,
    transition: {
      delay: 0.4 * i,
      duration: 0.55,
      ease: 'easeIn',
      type: "tween"
    },
  },
});

export const showMapMotion=()=>({
  hidden: {
    opacity: 0,
    scale:0.85,
    y: 20,
  },
  show: {
    scale:1,
    y: 0,
    opacity: 1,
    transition: {
    
      delay: 0.35 ,
      duration: 0.60,
     ease: [0.17, 0.67, 0.83, 0.67] ,
      type: "tween",
    },
  },
})
