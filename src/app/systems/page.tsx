import Image from "next/image";
import React from "react";

function Systems() {
  return (
    <div className="max-w-screen relative flex flex-col items-center justify-center p-10 md:p-40 md:pb-10">
      <div className=" flex items-center justify-center ">
        <div className=" flex flex-col items-center justify-between gap-24 xl:flex-row ">
          <div className="flex flex-1 flex-col gap-8   ">
            <p className="text-7xl leading-[96px]">
              Unlocking the power of unified systems
            </p>

            <p className="text-xl">
              Explores the transformative potential of integrating diverse
              systems into a harmonious whole, enabling enhanced efficiency,
              streamlined operations, and optimized outcomes.
            </p>

            <button className="h-12 w-48 rounded-full bg-black text-white">
              {" "}
              Get Started
            </button>
          </div>

          <div className=" flex flex-1  justify-end ">
            <img
              src={"/systemspage.png"}
              className="bg-cover"
              alt="gridphotos"
            />
          </div>
        </div>

        <img
          src={"/systemsgradientside.svg"}
          className="absolute left-0 top-12"
          alt="gridphotos"
        />

        <img
          src={"/systemsgradienttop.svg"}
          className="absolute top-0"
          alt="gridphotos"
        />
      </div>

      <div className="mt-48 ">
        <button className=" mb-12 ml-auto   flex h-12 w-44 items-center justify-center gap-2  rounded-full bg-black text-white">
          {" "}
          Filter Category <DownIcon />
        </button>

        <div className="flex flex-wrap gap-8">
          <Card
            description="SoundCloud integration allows for seamless
incorporation of SoundCloud's audio content, such
as music and podcasts, into various platforms,
providing a rich and immersive audio experience for
users
"
            icon={"/Soundcloud.svg"}
            name="Soundcloud"
          />

          <Card
            description="Slack is a versatile collaboration platform that allows
        teams to communicate and work together
        seamlessly, providing a centralized hub for instant
        messaging, file sharing, and project management"
            icon={"/Slack.svg"}
            name="Slack"
          />

          <Card
            icon={"/twitter.svg"}
            name="Twitter"
            description="Twitter is a dynamic social media platform that
enables users to engage in real-time conversations,
express thoughts, and share information through
concise messages called tweets"
          />

          <Card
            description="GitHub, a leading code collaboration and version
         control platform, empowers developers and teams to
         seamlessly collaborate on projects, manage code
         repositories, and track changes with ease"
            icon={"/Github.svg"}
            name="Github"
          />

          <Card
            description="LinkedIn integration allows users to seamlessly
           integrate their professional profiles, career
           achievements, and industry insights across various
           platforms and offers a comprehensive networking
           experience"
            icon={"/LinkedIn.svg"}
            name="Linkedin"
          />
          <Card
            description="Messenger integration enables the seamless
         integration of Messenger's powerful messaging
         capabilities into various platforms, facilitating real-
         time conversations, multimedia sharing, and
         enhanced connectivity for users"
            icon={"/Messenger.svg"}
            name="Messenger"
          />
          <Card
            icon={"/Pinterest.svg"}
            description="Pinterest integration allows users to seamlessly
incorporate Pinterest's visual discovery and
bookmarking features into various platforms, enabling
them to discover, curate, and save inspiring ideas and
content"
            name="Pinterest"
          />
          <Card
            icon={"/instagram.svg"}
            description="Instagram integration enables the seamless
integration of Instagram's powerful social media
platform, empowering users to connect, share, and
engage with visual content across diverse platforms
and applications"
            name="Instagram"
          />

          <Card
            icon={"/amazon.svg"}
            name="Amazon"
            description="Provides customers with a comprehensive shopping experience by giving them
            seamless access to Amazon's powerful e-commerce platforms such as
						product listing, inventory management and secure payment systems"
          />
        </div>
      </div>
    </div>
  );
}

export default Systems;

function Card({
  name,
  icon,
  description,
}: {
  name: string;
  icon: string;
  description: string;
}) {
  return (
    <div
      className=" flex h-[480px]   w-[500px]
     max-w-[90vw] flex-col justify-between rounded-3xl bg-black p-10 text-white"
    >
      <div
        className="  flex !h-[60px] !w-[65px]
        items-center justify-center rounded-xl
    border-white border-opacity-25 bg-white bg-opacity-10
       text-white shadow-inner  "
      >
        <Image src={icon} width={35} height={35} alt="icon" />
      </div>

      <div className="mb-2">
        <p className="mb-3 text-3xl">{name}</p>

        <p className="pr-14 text-xl">{description}</p>
      </div>

      <button
        className=" w-full
        items-center justify-center rounded-full border-white
        border-opacity-25 bg-white bg-opacity-10
        py-4 text-white shadow-inner"
      >
        <p className="">Learn More</p>
      </button>
    </div>
  );
}

function DownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
    >
      <g clip-path="url(#clip0_99_17785)">
        <path
          d="M7.17436 5.63931L11.9465 0.867188L13.3097 2.23038L7.17436 8.36569L1.03906 2.23038L2.40224 0.867188L7.17436 5.63931Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_99_17785">
          <rect
            width="12.6205"
            height="8.83434"
            fill="white"
            transform="translate(0.859375 0.722656)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
