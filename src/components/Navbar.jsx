import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar({ dark = false }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-16  rounded-full max-w-2xl mx-auto my-5",
        dark ? "bg-white " : " bg-[#F2F2F2] "
      )}
    >
      <Link href="/">
        <div className=" flex items-center justify-center text-2xl py-5 gap-3 font-bold  cursor-pointer">
          Bezu AI
        </div>
      </Link>
      <div>
        <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&pcampaignid=web_share">
          <Image
            src="/16.svg"
            width={500}
            height={500}
            alt=""
            className=" w-[150px]"
          />
        </Link>
      </div>
    </div>
  );
}
