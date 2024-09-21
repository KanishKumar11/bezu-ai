"use client";
import React, { useMemo, useState } from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import Image from "next/image";
import Footer from "./Footer";
import { Button } from "./ui/moving-border";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Hero() {
  const [normalizedIdx, setNormalisedIdx] = useState(0);
  const words = [
    "I wanna see your ab's 😉",
    "Today is your leg day. Ready for it?",
    "I'm a travel vlogger From Thailand Come here once?",
    "These r my random clicks, How am i looking?",
    "If you wanna marry me, then move to my village",
    "Are you excited, to experience the best AI",
    "Do you wanna go to Mars ?",
    "Don't underestimate the power of a common man!",
    "Let's save the world together ? ",
  ];

  const subHeading = `“${words[normalizedIdx]}“`;
  console.log(subHeading);
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1 } }),
  };

  const subHeadingWords = subHeading.split(" ");
  console.log(subHeadingWords);

  return (
    <div className="bg-white bg-[url('/2.jpg')]">
      <Navbar />

      <LampContainer className="relative">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="my-28 text-black py-5 rounded-full lg:px-14 px-7 bg-gradient-to-b from-[#A7B5FF] to-[#F3ACFF] z-50 text-base gap-3 items-center flex"
        >
          <div className="inline-flex -space-x-2 ">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="inline-block lg:h-7 lg:w-7 h-5 w-5 rounded-full ring-2 ring-white"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="inline-block lg:h-7 lg:w-7 h-5 w-5 rounded-full ring-2 ring-white"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              className="inline-block lg:h-7 lg:w-7 h-5 w-5 rounded-full ring-2 ring-white"
            />
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="inline-block lg:h-7 lg:w-7 h-5 w-5 rounded-full ring-2 ring-white"
            />
          </div>
          <div className="inline-flex   "> 25k+ people using Bezu</div>{" "}
        </motion.div>

        {/* Pass setNormalisedIdx to Carousel */}
        <Carousel setNormalisedIdx={setNormalisedIdx} />

        <div className="my-8">
          <motion.h2
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className={`text-white lg:text-2xl text-base max-w-sm text-center`}
          >
            {subHeadingWords.map((word, i) => (
              <motion.span key={word} variants={wordVariants} custom={i}>
                {word}{" "}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* <Button className="bg-yellow-500 hover:bg-yellow-400 text-black text-2xl font-medium px-10 py-5">
          Download Bezu AI
        </Button> */}
        <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&pcampaignid=web_share">
          <Image
            src="/16.svg"
            width={500}
            height={500}
            alt=""
            className="lg:w-[230px] w-[150px]"
          />
        </Link>
        <Image
          src="/9.svg"
          alt=""
          width={100}
          height={50}
          className="mr-80 mt-5"
        />
      </LampContainer>
    </div>
  );
}
