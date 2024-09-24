import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Personal() {
  return (
    <div className="flex flex-col items-center justify-center my-20 gap-10 w-full">
      <div className="flex flex-col text-white">
        <Image src="/1.svg" height={50} width={50} alt="" />
      </div>
      <h2 className="text-balance text-center max-w-4xl lg:text-5xl text-3xl text-white">
        Your Personal Companion for Real Conversations – Anytime, Anywhere
      </h2>
      <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&pcampaignid=web_share">
        <Image
          src="/16.svg"
          width={500}
          height={500}
          alt=""
          className="lg:w-[230px] w-[150px]"
        />
      </Link>
      <div className="lg:px-20 px-4 max-w-6xl w-full relative max-lg:pt-20 flex lg:gap-10 gap-4 my-20">
        <Image
          src="/17.svg"
          width={1200}
          height={1200}
          alt=""
          className="w-[30%]   mx-auto"
        />
        <Image
          src="/18.svg"
          width={1200}
          height={1200}
          alt=""
          className=" w-[30%]   mx-auto"
        />
        <Image
          src="/19.svg"
          width={1200}
          height={1200}
          alt=""
          className="w-[30%]   mx-auto"
        />
      </div>
    </div>
  );
}
