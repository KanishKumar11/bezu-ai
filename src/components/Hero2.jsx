import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import Iphone15Pro from "./ui/iphone-15-pro";
import Footer from "./Footer";

export default function Hero2() {
  return (
    <div className="bg-[url('/lbg.svg')] bg-cover">
      <Navbar />
      <div
        className="flex flex-col items-center mt-16 
      justify-center gap-4"
      >
        <Image src="/logo.svg" alt="" width={50} height={50} />
        <h1 className="euclid text-4xl max-w-4xl text-balance mx-auto text-center">
          Real-time 1 on 1 video chats with AI Personalities or AI Clones
        </h1>
        <p>For Couples who’s love language is music </p>
        <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&pcampaignid=web_share">
          <Image
            src="/16.svg"
            width={500}
            height={500}
            alt=""
            className="lg:w-[230px] w-[150px]"
          />
        </Link>
      </div>
      <div className="mx-auto max-h-screen my-10 flex items-center justify-center gap-20">
        <Image src="/25.svg" alt="" width={400} height={500} />
        <Iphone15Pro
          className="size-full max-h-[80vh] w-max"
          src="/1.mp4"
          type="video"
        />
        <Image src="/26.svg" alt="" width={400} height={500} />
      </div>
      <div className="rounded-full my-10 bg-black flex gap-5 mx-auto p-5 w-max px-10 items-center">
        <div className="bg-yellow-500 rounded-full px-10 py-3">Video call</div>
        <div className="bg-gray-500 rounded-full px-10 py-3 text-white">
          Chatting
        </div>
      </div>
      <Footer />
    </div>
  );
}
