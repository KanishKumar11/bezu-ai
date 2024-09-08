import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex  gap-10 justify-between text-white flex-col px-10 py-5">
      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col text-white">
          <Image src="/1.svg" height={80} width={80} alt="" />
          {/* Bezu AI */}
        </div>
        <div>
          {" "}
          <div>Terms & conditions</div>
          <div>Contact us</div>
        </div>
        <div>
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
        <Link href="#">
          <svg
            width="64"
            height="56"
            viewBox="0 0 64 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="64" height="56" rx="28" fill="black" />
            <path
              d="M33.795 26.533L40.68 18H37.607L32.352 24.517L27.69 18H21L28.806 28.91L21.47 38H24.544L30.249 30.93L35.31 38H42L33.795 26.533ZM31.415 29.483L29.97 27.464L24.36 19.627H26.67L31.198 25.944L32.641 27.964L38.659 36.373H36.349L31.415 29.483Z"
              fill="white"
            />
          </svg>
        </Link>
        <Link href="#">
          <svg
            width="64"
            height="56"
            viewBox="0 0 64 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="64" height="56" rx="28" fill="white" />
            <g clip-path="url(#clip0_11_1597)">
              <path
                d="M38.375 16H25.625C22.5184 16 20 18.5184 20 21.625V34.375C20 37.4816 22.5184 40 25.625 40H38.375C41.4816 40 44 37.4816 44 34.375V21.625C44 18.5184 41.4816 16 38.375 16Z"
                fill="url(#paint0_radial_11_1597)"
              />
              <path
                d="M38.375 16H25.625C22.5184 16 20 18.5184 20 21.625V34.375C20 37.4816 22.5184 40 25.625 40H38.375C41.4816 40 44 37.4816 44 34.375V21.625C44 18.5184 41.4816 16 38.375 16Z"
                fill="url(#paint1_radial_11_1597)"
              />
              <path
                d="M32.0008 18.625C29.4548 18.625 29.1352 18.6362 28.1353 18.6816C27.1372 18.7274 26.4559 18.8853 25.8598 19.1172C25.2432 19.3566 24.7201 19.677 24.1991 20.1982C23.6775 20.7194 23.3572 21.2424 23.117 21.8588C22.8845 22.4551 22.7263 23.1366 22.6814 24.1342C22.6367 25.1342 22.625 25.4539 22.625 28.0001C22.625 30.5463 22.6363 30.8648 22.6816 31.8647C22.7276 32.8628 22.8855 33.5441 23.1172 34.1402C23.3568 34.7568 23.6772 35.2799 24.1984 35.8009C24.7194 36.3225 25.2424 36.6436 25.8586 36.883C26.4552 37.1148 27.1365 37.2728 28.1344 37.3186C29.1344 37.364 29.4538 37.3752 31.9997 37.3752C34.5461 37.3752 34.8646 37.364 35.8646 37.3186C36.8626 37.2728 37.5447 37.1148 38.1412 36.883C38.7576 36.6436 39.2799 36.3225 39.8007 35.8009C40.3223 35.2799 40.6425 34.7568 40.8828 34.1404C41.1133 33.5441 41.2715 32.8626 41.3184 31.8649C41.3633 30.865 41.375 30.5463 41.375 28.0001C41.375 25.4539 41.3633 25.1344 41.3184 24.1344C41.2715 23.1363 41.1133 22.4552 40.8828 21.8591C40.6425 21.2424 40.3223 20.7194 39.8007 20.1982C39.2793 19.6768 38.7578 19.3564 38.1406 19.1173C37.543 18.8853 36.8613 18.7273 35.8632 18.6816C34.8632 18.6362 34.5448 18.625 31.9979 18.625H32.0008ZM31.1598 20.3145C31.4095 20.3141 31.688 20.3145 32.0008 20.3145C34.5041 20.3145 34.8007 20.3235 35.7892 20.3684C36.7032 20.4102 37.1994 20.5629 37.5298 20.6913C37.9674 20.8611 38.2793 21.0643 38.6072 21.3925C38.9353 21.7206 39.1384 22.0331 39.3088 22.4706C39.4371 22.8006 39.59 23.2968 39.6316 24.2108C39.6765 25.1991 39.6863 25.4959 39.6863 27.9979C39.6863 30.4999 39.6765 30.7968 39.6316 31.7851C39.5898 32.6991 39.4371 33.1952 39.3088 33.5253C39.1389 33.9629 38.9353 34.2744 38.6072 34.6023C38.2791 34.9305 37.9676 35.1335 37.5298 35.3035C37.1997 35.4324 36.7032 35.5848 35.7892 35.6266C34.8009 35.6715 34.5041 35.6812 32.0008 35.6812C29.4975 35.6812 29.2008 35.6715 28.2126 35.6266C27.2985 35.5844 26.8024 35.4317 26.4717 35.3033C26.0342 35.1333 25.7217 34.9303 25.3935 34.6022C25.0654 34.274 24.8623 33.9623 24.692 33.5246C24.5637 33.1945 24.4108 32.6984 24.3691 31.7843C24.3242 30.796 24.3152 30.4992 24.3152 27.9956C24.3152 25.492 24.3242 25.1968 24.3691 24.2085C24.4109 23.2944 24.5637 22.7983 24.692 22.4678C24.862 22.0303 25.0654 21.7178 25.3936 21.3897C25.7218 21.0616 26.0342 20.8584 26.4717 20.6882C26.8022 20.5592 27.2985 20.4069 28.2126 20.3649C29.0774 20.3258 29.4126 20.3141 31.1598 20.3121V20.3145ZM37.0052 21.8711C36.3841 21.8711 35.8802 22.3745 35.8802 22.9957C35.8802 23.6168 36.3841 24.1207 37.0052 24.1207C37.6263 24.1207 38.1302 23.6168 38.1302 22.9957C38.1302 22.3746 37.6263 21.8707 37.0052 21.8707V21.8711ZM32.0008 23.1856C29.3421 23.1856 27.1864 25.3413 27.1864 28.0001C27.1864 30.6589 29.3421 32.8136 32.0008 32.8136C34.6597 32.8136 36.8146 30.6589 36.8146 28.0001C36.8146 25.3413 34.6595 23.1856 32.0007 23.1856H32.0008ZM32.0008 24.875C33.7267 24.875 35.1259 26.2741 35.1259 28.0001C35.1259 29.7259 33.7267 31.1252 32.0008 31.1252C30.275 31.1252 28.8759 29.7259 28.8759 28.0001C28.8759 26.2741 30.2749 24.875 32.0008 24.875Z"
                fill="white"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_11_1597"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(26.375 41.8485) rotate(-90) scale(23.7858 22.1227)"
              >
                <stop stop-color="#FFDD55" />
                <stop offset="0.1" stop-color="#FFDD55" />
                <stop offset="0.5" stop-color="#FF543E" />
                <stop offset="1" stop-color="#C837AB" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_11_1597"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.9799 17.7288) rotate(78.681) scale(10.6324 43.827)"
              >
                <stop stop-color="#3771C8" />
                <stop offset="0.128" stop-color="#3771C8" />
                <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
              </radialGradient>
              <clipPath id="clip0_11_1597">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(20 16)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <Link href="#">
          <svg
            width="64"
            height="56"
            viewBox="0 0 64 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="64" height="56" rx="28" fill="#0A66C2" />
            <path
              d="M39 19C39.5304 19 40.0391 19.2107 40.4142 19.5858C40.7893 19.9609 41 20.4696 41 21V35C41 35.5304 40.7893 36.0391 40.4142 36.4142C40.0391 36.7893 39.5304 37 39 37H25C24.4696 37 23.9609 36.7893 23.5858 36.4142C23.2107 36.0391 23 35.5304 23 35V21C23 20.4696 23.2107 19.9609 23.5858 19.5858C23.9609 19.2107 24.4696 19 25 19H39ZM38.5 34.5V29.2C38.5 28.3354 38.1565 27.5062 37.5452 26.8948C36.9338 26.2835 36.1046 25.94 35.24 25.94C34.39 25.94 33.4 26.46 32.92 27.24V26.13H30.13V34.5H32.92V29.57C32.92 28.8 33.54 28.17 34.31 28.17C34.6813 28.17 35.0374 28.3175 35.2999 28.5801C35.5625 28.8426 35.71 29.1987 35.71 29.57V34.5H38.5ZM26.88 24.56C27.3256 24.56 27.7529 24.383 28.0679 24.0679C28.383 23.7529 28.56 23.3256 28.56 22.88C28.56 21.95 27.81 21.19 26.88 21.19C26.4318 21.19 26.0019 21.3681 25.685 21.685C25.3681 22.0019 25.19 22.4318 25.19 22.88C25.19 23.81 25.95 24.56 26.88 24.56ZM28.27 34.5V26.13H25.5V34.5H28.27Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div className="flex items-start justify-start">
        &copy;2024 All rights reserved.
      </div>
    </div>
  );
}
