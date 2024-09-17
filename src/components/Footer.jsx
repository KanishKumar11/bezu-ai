import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full flex  gap-10 justify-between text-white flex-col px-10 py-5 mt-20 relative">
      <div className="flex w-full items-start justify-between lg:flex-row flex-col space-y-7">
        <div className="flex flex-col text-white">
          <Image src="/1.svg" height={80} width={80} alt="" />
          {/* Bezu AI */}
        </div>
        <div className="flex lg:flex-row flex-col gap-5">
          {" "}
          <Link href="/terms-and-conditions">
            {" "}
            <div className="cursor-pointer">Terms & conditions</div>
          </Link>
          <Link href="/privacy-policy">
            <div className="cursor-pointer">Privacy Policy</div>
          </Link>
          <div className="cursor-pointer">Contact us</div>
        </div>
        <div className="lg:static absolute right-4 -top-20">
          <Link href="/#">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="white" />
              <path
                d="M21.88 32.9401L28 26.8334L34.12 32.9401L36 31.0601L28 23.0601L20 31.0601L21.88 32.9401Z"
                fill="#010101"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-7 justify-center">
        <Link href="https://x.com/bezu_ai" target="_blank">
          <FaXTwitter className="text-2xl text-neutral-400" />
        </Link>
        <Link href="https://instagram.com/talktobezu" target="_blank">
          <svg
            class="h-10 w-10 roate-90"
            fill="#9e9e9e"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
            <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
          </svg>{" "}
        </Link>
      </div>
      <div className="flex items-start justify-start">
        &copy;2024 All rights reserved.
      </div>
    </div>
  );
}
