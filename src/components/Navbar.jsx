import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <Link href="/">
      <div className="text-white flex items-center justify-center text-2xl py-5 gap-3 font-bold shadow-2xl cursor-pointer">
        {/* <div className="h-[35px] w-[35px] object-contain">
        <Image src="/1.svg" alt="" width={35} height={35} />
      </div> */}
        Bezu AI
      </div>
    </Link>
  );
}
