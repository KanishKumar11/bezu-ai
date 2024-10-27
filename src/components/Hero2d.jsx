import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import Iphone15Pro from "./ui/iphone-15-pro";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

export default function Hero2d() {
  const [activeSection, setActiveSection] = useState("video");
  const containerRef = useRef(null);
  const touchStartY = useRef(null);

  // Set this to true if you want the scroll effect to happen only once
  const [scrollOnce, setScrollOnce] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollOnce && activeSection !== "video") return;

      if (e.deltaY > 0) {
        setActiveSection("chat");
      } else if (e.deltaY < 0) {
        setActiveSection("video");
      }

      if (scrollOnce) setScrollOnce(true);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (scrollOnce && activeSection !== "video") return;

      if (touchStartY.current !== null) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;

        if (deltaY > 50) {
          setActiveSection("chat");
          if (scrollOnce) setScrollOnce(true);
        } else if (deltaY < -50) {
          setActiveSection("video");
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      container.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [activeSection, scrollOnce]);

  const changeSection = (section) => {
    setActiveSection(section);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "min-h-screen block  bg-cover",
        activeSection === "video"
          ? "bg-gradient-to-b from-white to-[#FEF1BD]"
          : "bg-black bg-[url('/dbg.svg')] text-white"
      )}
    >
      <div className="pt-5">
        {" "}
        <Navbar dark={true} />
      </div>
      <AnimatePresence mode="wait">
        {activeSection === "video" ? (
          <motion.div
            key="video"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className=" text-black min-h-screen"
          >
            <div className="flex flex-col items-center mt-16 justify-center gap-4 lg:mb-0 mb-16">
              <h1 className="euclid text-4xl max-w-4xl text-balance mx-auto text-center">
                Video Chat With AI Personalities or AI Clones
              </h1>
              <p>Our AI can see, listen and speak to you </p>
              {/* <div className="flex gap-4">
                <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&pcampaignid=web_share">
                  <Image
                    src="/16.svg"
                    width={250}
                    height={250}
                    alt=""
                    className="w-[150px]"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/apple.svg"
                    width={250}
                    height={250}
                    alt=""
                    className="w-[150px]"
                  />
                </Link>
              </div> */}
              <Link href="#">
                <div className="bg-black text-white rounded-md px-8 py-3 hover:bg-[#272727]hover:scale-105  ">
                  Join for early access!
                </div>
              </Link>
            </div>
            <div className="mx-auto max-h-screen my-10 flex items-center justify-center gap-20">
              <Image
                src="/25.svg"
                alt=""
                width={400}
                height={500}
                className="lg:block hidden"
              />
              <Iphone15Pro
                className="size-full max-h-[80vh] w-max"
                src="/light.svg"
                type="image"
              />
              <Image
                src="/26.svg"
                alt=""
                width={400}
                height={500}
                className="lg:block hidden"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className=" text-white min-h-screen"
          >
            <div className="flex flex-col items-center mt-16 justify-center gap-4 lg:mb-0 mb-16">
              {/* <Image src="/logo.svg" alt="" width={50} height={50} /> */}
              <h1 className="euclid text-4xl max-w-4xl text-balance mx-auto text-center">
                Video Chat With AI Personalities or AI Clones
              </h1>
              <p>Our AI can see, listen and speak to you</p>
              {/* <div className="flex gap-4">
                <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&pcampaignid=web_share">
                  <Image
                    src="/16.svg"
                    width={250}
                    height={250}
                    alt=""
                    className=" w-[150px]"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/appled.svg"
                    width={250}
                    height={250}
                    alt=""
                    className=" w-[150px]"
                  />
                </Link>
              </div> */}
              <Link href="#">
                <div className="bg-black text-white rounded-md px-8 py-3 hover:bg-[#272727]hover:scale-105  ">
                  Join for early access!
                </div>
              </Link>
            </div>
            <div className="mx-auto max-h-screen my-10 flex items-center justify-center gap-20">
              <Image
                src="/25d.svg"
                alt=""
                width={400}
                height={500}
                className="lg:block hidden"
              />
              <Iphone15Pro
                className="size-full max-h-[80vh] w-max"
                src="/m.svg"
                type="image"
              />
              <Image
                src="/26d.svg"
                alt=""
                width={400}
                height={500}
                className="lg:block hidden"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bottom-20 left-1/2 rounded-full bg-gray-800 lg:mt-0 mt-10 flex gap-5 p-5 w-max px-10 items-center z-10 mx-auto">
        <motion.div
          className={`rounded-full px-5 py-5 cursor-pointer ${
            activeSection === "video"
              ? "bg-yellow-500 text-black"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => changeSection("video")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src="/camera.svg" alt="" width={35} height={35} />
        </motion.div>
        <motion.div
          className={`rounded-full px-5 py-3  cursor-pointer ${
            activeSection === "chat"
              ? "bg-yellow-500 text-black"
              : "bg-gray-200 text-white"
          }`}
          onClick={() => changeSection("chat")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/chat.svg"
            alt=""
            width={30}
            height={30}
            className="text-wh"
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
