import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FYP from "@/public/FYP.jpg";
import Food_Affairs from "@/public/Food_Affairs.jpg";
import Sentiment from "@/public/Sentiment.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Project Intern",
    location: "Lahore, Pakistan",
    description:
      "I worked as a project intern and develop visitor management system for Century Paper & Board Mills Ltd.",
    icon: React.createElement(LuGraduationCap),
    date: " May 2023 - June 2023",
  },
  {
    title: "Internship",
    location: "Lahore, Pakistan",
    description:
      "I worked as a full stack developer at Tiers Limited and developed different projects using React, Node.js, and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - August 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Final Year Project",
    description:
      "Introducing our cutting-edge React Native Pharmacy Locator app! Seamlessly combining GPS"+
      " technology, our app finds nearby pharmacies based on your medication search.",
    tags: ["React Native", "Firebase", "MongoDB", "Node.js"],
    imageUrl: FYP,
  },
  {
    title: "Food Affairs",
    description:
      "Experience seamless event management with our website. Effortlessly create events and facilitate"+
      " participant registration through intuitive interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: Food_Affairs,
  },
  {
    title: "Sentimental Analysis",
    description:
      "Sentiment analysis project utilizes machine learning techniques to analyze and classify text data." +
      " Through natural language processing, we discern sentiments such as positive, negative.",
    tags: ["Python", "Django", "SQLite3"],
    imageUrl: Sentiment,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "React Native",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Python",
  "Django",
  "C",
  "C++",
  "Unity",
  "Github",
] as const;
