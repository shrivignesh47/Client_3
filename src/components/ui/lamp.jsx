"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";


export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-[#121414] w-full  z-0 ",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 mt-[10vh] sm:mt-[40vh]">
        {/* Left Light */}
        <motion.div
          initial={{ opacity: 0.5, width: "45rem" }}
          whileInView={{ opacity: 1, width: "70rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 w-[15rem] sm:h-56 sm:w-[30rem] bg-gradient-conic from-[#B9915D] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-[#121414] h-32 sm:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-22 sm:w-40 h-full left-0 bg-[#121414] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "45rem" }}
          whileInView={{ opacity: 1, width: "70rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 w-[15rem] sm:h-56 sm:w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#B9915D] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-32 sm:w-40 h-full right-0 bg-[#121414] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-[#121414] h-32 sm:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Shadows & Glow */}
        <div className="absolute top-1/2 h-32 sm:h-48 w-full translate-y-12 scale-x-150 bg-[#121414] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-32 sm:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-1 sm:h-16 w-[14rem] sm:w-[28rem] -translate-y-1/2 rounded-full bg-[#B9915D] opacity-20 blur-3xl"></div>

        {/* Central Glow Effect */}
        <motion.div
          initial={{ width: "4rem" }}
          whileInView={{ width: "8rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-16 sm:h-26 w-32 sm:w-64 -translate-y-[3rem] sm:-translate-y-[6rem] rounded-full bg-[#B9915D] blur-2xl"
        ></motion.div>

        {/* Lamp Top Line */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          // className="absolute inset-auto z-50 h-0.6 w-[15rem] sm:w-[30rem] -translate-y-[3.5rem] sm:-translate-y-[7rem] bg-[#B9915D]"
        ></motion.div>
      </div>

      <div className="relative z-50 flex -translate-y-40 sm:-translate-y-80 flex-col items-center  lg:mt-[10vh] sm:mt-[10vh]">
        {children}
      </div>
    </div>
  );
};