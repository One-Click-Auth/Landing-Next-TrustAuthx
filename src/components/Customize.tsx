import React from "react";

export default function Customize() {
  return (
    <div className="flex flex-col items-center justify-center gap-28  ">
      <div className="relative flex min-h-screen flex-col items-center justify-center px-3">
        <div className="relative mt-16 flex max-w-screen-lg  flex-col items-center justify-center gap-14 2xl:mt-32 2xl:gap-20 ">
          <div className="border border-[#0099FF] p-4 px-10 2xl:hidden ">
            <p className="text-xs font-bold text-[#5E00FF]">
              From Panel to Real Site
            </p>

            <p className="font-semibold">Go No-Code at all</p>
          </div>

          <p className="flex items-center justify-center border border-dashed border-[#09F] px-4 py-8 text-center text-[65px] leading-none  lg:text-7xl">
            Customize It to Life
            <br />
            Add Image, Ai, Gradients Interactions, Security & possibilities.
          </p>

          <div className="-bottom-24 left-0  flex   items-center gap-10 2xl:absolute">
            <GradientAISvg />

            <p className="gradient-text-ai  text-[111px] font-semibold">AI</p>
          </div>

          <div className="relative ">
            <Pointy />

            <button
              className="flex items-center rounded-full  bg-[#9EFF00]
           p-3 px-6   "
            >
              Look around! Give it a shot
            </button>
          </div>

          <button
            className="flex items-center gap-2  rounded-[20px] bg-[#FD5C1D]
           p-5 text-2xl font-semibold text-white "
          >
            <ArrowRightIcon />
            Start Now Its Free
          </button>

          <div className="flex flex-wrap items-center justify-center gap-9">
            <div className="  left-16 top-5  w-[316px] border border-[#9900FF] p-8 2xl:hidden">
              <div className="flex items-center gap-3">
                {/* replace thsi with shadcn avatar compnent in regular codebase */}
                <img
                  alt=""
                  src="https://s3-alpha-sig.figma.com/img/da73/1fd7/dc33e93cde3509aa78e24c0e19c74daa?Expires=1694390400&Signature=lTUbdJnWxxAKiJf3qsXeEttE4ZMV5EL~mbpsgtxv353l2ZGhD42sQ30g14TCItAQTrfEijaoua6qUqW1O5N7G6GQVl3DPkbcIuYl7S5T7SRfQT~aXHHsJsqfPDWczZtHylKzxh42sA7gyPhsrYZrvTO9c1iXU~Gb0Xs8N1X4TMv3888I10jV7pmCrXawdTFZSpSdOEgbQe0EhxcSTfkhnDB75TvLshvg~3yaxc6Vx4~vkngv7KZ1zKWqFHjLNIlPuYgi2oZMDPAh5IV7YHkkZXj7N-uVnTgBBsuJBSc0Grv3IZ9mzXe-N-Xg-bjAfcPmcEoGGKPyu64mnz2S3kkSOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="h-[50px] rounded-full bg-cover"
                />

                <div>
                  <p className="text-lg">Omar Farook</p>
                  <p className="text-lg text-[#555]">@BuildWithOmar</p>
                </div>
              </div>

              <p className="mt-6 text-xl">
                Framer is like @Figma but for designing and publishing real
                responsive websites. Webflow uses the traditional web builder
                workflow.
              </p>
            </div>

            <div className=" bottom-5  right-32  w-[316px] border border-[#0099FF] p-8 2xl:hidden">
              <div className="flex items-center gap-3">
                {/* replace thsi with shadcn avatar compnent in regular codebase */}
                <img
                  alt=""
                  src="https://s3-alpha-sig.figma.com/img/6e37/c23a/796cbd72327de48bed1e14b67a46f98e?Expires=1694390400&Signature=XAjvLPT0q9h2Ntmw6QZqCU-qJUOFkwdeS61MkTtGScCIord4F1CC1dZ3Ks2qEAWI73m70jZkgcbZ0GJXzhVoTssTg1isxULF2ThmSKRylHblRHnKhWWiyHAScp-OaZZHeTbki0lXHHQbzsGCHEIEJTCXdtCK8sbZCLs28R-XvsRiky5kjHkvWqqwjEBi0HCeDJMfD0kfnn14XH9b1G8S~qx7eJdVfnrw~U8d9jAcMvEe2mnld0Jq5Kr2Y7qi-vJFCc9zPrid1beNPbKg4vY4A1yeUEPtI5mrQTx6CaKS7t8IMj-OyRe-WW12dxz-xq5qzIh-E3GrimHatRIwh37oWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="h-[50px] rounded-full bg-cover"
                />

                <div>
                  <p className="text-lg">Kevin</p>
                  <p className="text-lg text-[#555]">@kvncnls</p>
                </div>
              </div>

              <p className="mt-6 text-xl">
                It’s like @Figma but you’re actually building the site.
              </p>
            </div>

            <div className=" right-16 top-16  w-[316px] border border-[#9900FF] p-8 2xl:hidden">
              <div className="flex items-center gap-3">
                {/* replace thsi with shadcn avatar compnent in regular codebase */}
                <img
                  alt=""
                  src="https://s3-alpha-sig.figma.com/img/0393/bb53/1342dd46a5307c8fad2d3835d2242ce1?Expires=1694390400&Signature=LoHEzBgRrNzK61xk0Afvq6lXsM81cKSXcaH7RXJH2ZDwZISkawOZJpSqzcpF-13fKQCZTmvsXKnlp9yb681U3y8Zg~VswI5H6ugTyzu37kiFy3ZNJQobRr-iXkh-v7qKKD8VCrb4~8Ui7pXynIKL0OQ8wOpJRdZVjO7FnBNxAp9HjbezLwAGzqZ1C-NJd3h84ubjwxwQG2xAlNJFMLzcz8jwEySf0j1YjDW1xN6VrqtSjo2LD9m5CaC6ZjBfZJK32F1sOlMjL-te8YOSVOMr3w~CaPpRcUPSa6CwvfW5D~M21GgvaOQtTGdPmm1DvZv3r3W0n1w~hPzNf9fHdDwEJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="h-[50px] rounded-full bg-cover"
                />

                <div>
                  <p className="text-lg">Brink</p>
                  <p className="text-lg text-[#555]">@avandenbrink</p>
                </div>
              </div>
              <p className="mt-6 text-xl">
                If you are used to tools like Figma or Sketch, it is pretty easy
                to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pointy() {
  return (
    <svg
      className="absolute -left-7 -top-8"
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="78"
      viewBox="0 0 33 88"
      fill="none"
    >
      <g clipPath="url(#clip0_129_1381)">
        <g filter="url(#filter0_d_129_1381)">
          <path
            d="M7.85579 13.9536C6.70079 13.5926 5.61579 14.6776 5.97679 15.8326L12.1958 35.7336C12.5318 36.8096 13.8908 37.1436 14.6878 36.3466L28.3698 22.6646C29.1668 21.8676 28.8328 20.5086 27.7568 20.1726L7.85579 13.9536Z"
            fill="black"
          />
        </g>
        <path
          d="M7.85579 13.9536C6.70079 13.5926 5.61579 14.6776 5.97679 15.8326L12.1958 35.7336C12.5318 36.8096 13.8908 37.1436 14.6878 36.3466L28.3698 22.6646C29.1668 21.8676 28.8328 20.5086 27.7568 20.1726L7.85579 13.9536Z"
          fill="#9EFF00"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_129_1381"
          x="-8.09375"
          y="13.8833"
          width="50.9023"
          height="52.9033"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="7" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_129_1381"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_129_1381"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_129_1381">
          <rect
            width="32"
            height="87"
            fill="white"
            transform="translate(0.523438 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function GradientAISvg() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M4.58346 34.356C4.06182 33.9385 3.92313 33.2076 4.20187 32.6004C5.09051 30.6646 5.69287 28.3318 6.00855 25.6024C6.406 22.3393 6.10223 18.775 5.098 14.9084C4.23972 11.5268 2.96308 8.66738 1.26861 6.33093C0.866892 5.77732 0.856826 5.02039 1.28396 4.48675C1.70285 3.96343 2.425 3.80124 3.04313 4.06041C5.66059 5.15727 8.50346 5.81232 11.5718 6.026C15.1047 6.26224 18.517 5.884 21.8092 4.89123C24.7322 3.99902 27.2159 2.7909 29.26 1.26602C29.7958 0.866935 30.5367 0.851881 31.0581 1.26923C31.5855 1.69138 31.7299 2.4284 31.4486 3.04263C30.814 4.42963 30.3206 5.97419 29.9687 7.67676C29.5487 9.79058 29.3903 12.0194 29.4928 14.3634C29.6473 16.7015 30.0491 19.0255 30.6975 21.3348C31.558 24.3367 32.787 26.9456 34.3849 29.1615C34.7768 29.7052 34.7829 30.4464 34.3642 30.9695C33.939 31.5008 33.2005 31.6519 32.576 31.3825C30.9874 30.697 29.1855 30.1998 27.171 29.8907C24.7238 29.5339 22.2422 29.4555 19.7259 29.6558C17.2327 29.8278 14.9403 30.278 12.8492 31.007C10.2499 31.9149 8.09411 33.026 6.38233 34.341C5.85102 34.7487 5.10607 34.7743 4.58346 34.356Z"
          fill="url(#paint0_radial_129_1484)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_129_1484"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31.014 30.4605) rotate(-139.507) scale(41.0918)"
          >
            <stop stopColor="#9EFF00" />
            <stop offset="0.319445" stopColor="#26B4E1" stopOpacity="0.85" />
            <stop offset="0.621528" stopColor="#AE75DB" stopOpacity="0.91" />
            <stop offset="0.939236" stopColor="#FF9228" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="94"
        height="94"
        viewBox="0 0 94 94"
        fill="none"
      >
        <path
          d="M46.7726 93.3086C45.3013 93.3086 44.0572 92.243 43.7009 90.8156C42.5649 86.2651 40.3904 81.4259 37.1774 76.2994C33.3707 70.1431 27.9439 64.4336 20.8971 59.1685C14.7685 54.5362 8.63916 51.3772 2.51122 49.6922C1.05885 49.2933 0 48.0059 0 46.5008C0 45.0248 1.01828 43.7523 2.43752 43.3473C8.44646 41.6312 14.235 38.8455 19.8037 34.9907C26.2021 30.5356 31.5478 25.1899 35.8413 18.9531C39.6386 13.3972 42.2458 7.90283 43.6617 2.46862C44.0335 1.04533 45.2864 0 46.7571 0C48.2446 0 49.507 1.06832 49.8687 2.51122C50.6862 5.76891 51.9634 9.103 53.7011 12.5142C55.8878 16.7259 58.6823 20.7754 62.084 24.6639C65.5669 28.4706 69.4554 31.9129 73.7476 34.9907C79.3576 38.9672 85.0602 41.761 90.8562 43.3716C92.2781 43.7671 93.3086 45.0329 93.3086 46.5083C93.3086 48.0066 92.247 49.2825 90.8028 49.6787C87.1286 50.6862 83.3469 52.311 79.4584 54.5517C74.7605 57.3057 70.3865 60.5857 66.3363 64.3924C62.2869 68.1187 58.9656 72.0471 56.3739 76.1777C53.1548 81.3151 50.9776 86.1914 49.8444 90.8075C49.4921 92.2396 48.2466 93.3086 46.7726 93.3086Z"
          fill="url(#paint0_radial_129_1481)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_129_1481"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(86.8488 50.2431) rotate(-178.182) scale(90.4831)"
          >
            <stop stopColor="#9EFF00" />
            <stop offset="0.319445" stopColor="#26B4E1" stopOpacity="0.85" />
            <stop offset="0.621528" stopColor="#AE75DB" stopOpacity="0.91" />
            <stop offset="0.939236" stopColor="#FF9228" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M21.5459 13.4287L14.7959 20.1787C14.5846 20.39 14.2979 20.5087 13.9991 20.5087C13.7002 20.5087 13.4135 20.39 13.2022 20.1787C12.9908 19.9673 12.8721 19.6807 12.8721 19.3818C12.8721 19.0829 12.9908 18.7963 13.2022 18.5849L18.0312 13.7577H4.25C3.95163 13.7577 3.66548 13.6392 3.4545 13.4282C3.24353 13.2172 3.125 12.9311 3.125 12.6327C3.125 12.3344 3.24353 12.0482 3.4545 11.8372C3.66548 11.6263 3.95163 11.5077 4.25 11.5077H18.0312L13.2041 6.67773C12.9927 6.46639 12.874 6.17974 12.874 5.88086C12.874 5.58197 12.9927 5.29533 13.2041 5.08398C13.4154 4.87264 13.7021 4.75391 14.0009 4.75391C14.2998 4.75391 14.5865 4.87264 14.7978 5.08398L21.5478 11.834C21.6527 11.9386 21.7359 12.063 21.7926 12.1999C21.8493 12.3368 21.8784 12.4835 21.8782 12.6317C21.8781 12.7799 21.8486 12.9266 21.7916 13.0633C21.7346 13.2001 21.6511 13.3243 21.5459 13.4287Z"
        fill="white"
      />
    </svg>
  );
}
