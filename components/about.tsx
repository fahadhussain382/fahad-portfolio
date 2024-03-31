"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm currently a BS Computer Science student at University of Engineering and Technology, Lahore ,
      with a passion for pursuing a career as a web and application developer. Over the past year,
      I've gained valuable experience through internships at two different companies . collaborating with
      professionals and acquiring essential skills for website development.My enthusiasm for learning extends
      to artificial intelligence, making me an AI enthusiast. My core stack is React Native, React, Node.js, and MongoDB.
      I am also familiar with other Programming Languages like C, C++, C# and also done some game development work using unity. 
      I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
      </p>

      <p>
      <span className="italic">When I'm not coding, I enjoy playing PC games and outdoor sports.</span>
      </p>
    </motion.section>
  );
}
