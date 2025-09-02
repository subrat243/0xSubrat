"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">My Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hey,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              I'm Subrat...
            </span>{" "}
            ^_^
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-1 max-w-[600px]"
        >
          I&apos;m a Cybersecurity student and Cybersecurity enthusiast. I specialize in Penetration testing, Network security, and WebApp security. 
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-3 max-w-[600px]"
        >
          With hands-on experience in tools like Nmap, Wireshark, Metasploit, Burp Suite, and knowledge of network protocols and frameworks, I’m passionate about ethical hacking, digital forensics, and threat detection.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-1 max-w-[600px]"
        >
          My goal is to keep growing as a learner in cybersecurity, explore ethical hacking through practical projects, and share my journey while contributing to a safer digital world.
        </motion.p>


      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/Cyber-Security.png"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
