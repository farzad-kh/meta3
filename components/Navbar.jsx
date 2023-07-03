'use client';
import { motion } from "framer-motion";
import  styles from "../styles/index"
import { navVariants } from "@/utils/motion";

const Navbar = () => (
  <motion.nav
  variants={navVariants}
  initial="hidden"
  whileInView="show"
  className={`sm:px-16 px-6 py-8 relative`}
  >
  <div className="absolute w-[50%] inset-0  gradient-01 "></div>
  <div className={`${styles.innerWidth} mx-auto flex justify-between gap-7`}>
    <img className="object-contain" src="/search.svg" alt="search"/>
  <h2 className="font-extrabold text-2xl leading-7 text-white">
    METAVERSUS
  </h2>
  <img src="/menu.svg" alt="menu" className=""/>
  </div>
  </motion.nav>
);

export default Navbar;
