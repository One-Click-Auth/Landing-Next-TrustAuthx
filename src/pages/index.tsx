import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import InteractivePrism from "../components/interactivePrism";
import { CanvasPart } from './new';
import Timeline from "./timeline";
import { TrustAuthXLogo } from "../components/svgs/TrustAuthXLogo";
import { Vector } from "../components/svgs/Vector";
import { VectorRight } from "../components/svgs/VectorRight";
import { GithubLogo } from "../components/svgs/Github";
import { TrustAuthXText } from "../components/svgs/TrustAuthXText";
import { LowCode } from "../components/svgs/low-code";
import { Framer } from '../components/svgs/Framer';
import { Customization } from "../components/svgs/Customization";


export default function LandingPageCompoent() {
  return (
    <>
      <Menu />
      <InteractivePrism bgColor='black' height="1400px" />
      <TrustAuthXText />
      <LowCode />
      <CanvasPart />
      <Timeline />
      {/* <Framer /> */}
      <Customization />
      <Footer />
    </>
  )
}


function Menu() {

  return (
    <div className="border-0.5 border-[#DFDFDF] bg-opacity-1 w-full text-[#DFDFDF] h-20 px-14 py-5 bg-black bg-opacity-0 border border-white backdrop-blur-sm justify-center items-start inline-flex absolute top-0 left-0 z-10">
      <div className="h-12 px-14 justify-between items-center gap-96 flex">
        <div className="justify-start items-center gap-7 flex">
          <div className="w-11 h-11 relative">
            <TrustAuthXLogo />
            <div className="w-6 h-8 left-[10.48px] top-[7.99px] absolute">
            </div>
          </div>
          <div className="h-6 justify-center items-start gap-7 flex">
            <div className="w-24 self-stretch justify-center items-center gap-1 inline-flex">
              <div className="mix-blend-exclusion text-center text-base font-medium leading-normal">Products</div>
              <div className="w-5 px-1.5 py-2 justify-start items-start inline-flex">
                <Vector />
              </div>
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="mix-blend-exclusion text-base font-medium leading-normal">Customers</div>
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="mix-blend-exclusion text-base font-medium leading-normal">Enterprise</div>
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="mix-blend-exclusion text-base font-medium leading-normal">Pricing</div>
            </div>
            <div className="grow shrink basis-0 self-stretch justify-center items-center gap-1 inline-flex">
              <div className="mix-blend-exclusion text-center text-base font-medium leading-normal">Resources</div>
              <div className="w-5 px-1.5 py-2 justify-start items-start inline-flex" />
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="justify-start items-start flex">
                <div className="mix-blend-exclusion text-base font-medium leading-normal">Contact us</div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center gap-11 flex">
          <div className="justify-start items-center gap-1.5 flex">
            <GithubLogo />
            <div className="mix-blend-exclusion text-base font-semibold leading-none">Github</div>
          </div>
          <div className="py-4 justify-start items-center flex">
            <div className="mix-blend-exclusion text-base font-semibold leading-none">Docs</div>
          </div>
          <div className="py-4 justify-start items-center flex">
            <div className="mix-blend-exclusion text-base font-semibold leading-none">Sign in</div>
          </div>
          <div className="px-5 py-2.5 bg-white rounded-full border border-neutral-800 justify-center items-center gap-1 flex">
            <div className="mix-blend-exclusion text-center text-white text-base font-semibold leading-normal">Let’s Get Started</div>
            <div className="w-5 h-5 pr-2 py-1.5 justify-start items-center gap-2 flex" />
            <VectorRight />
          </div>
        </div>
      </div>
    </div>
  )
}


function Footer() {
  return (
    <div className="flex min-h-screen  flex-col items-center justify-center py-12 ">
      <PricingPart />
      <SubscribePart />
      <CopyrightInfo />
    </div>
  );
}

function PricingPart() {
  return (
    <div className="relative flex w-[850px]  flex-col items-center justify-center">
      <div className="DivSectionHeader   inline-flex flex-col items-center  justify-start gap-2.5">
        <div className="gradientbg flex h-7 w-24 items-center justify-center rounded-3xl bg-gradient-to-r text-center">
          <div className=" text-sm font-medium leading-none text-stone-900 text-opacity-40">
            Get access
          </div>
        </div>

        <div className="flex  flex-col items-center justify-center ">
          <p className="text-center text-4xl font-medium leading-10 text-black">
            We like keeping things simple
            <br />
            Two plan Two price.
          </p>
        </div>
      </div>

      <div className="mt-16 flex  gap-24">
        <div className="flex flex-col gap-8">
          <div className=" flex  items-center gap-5">
            <div className="flex ">
              <p className="textgradient  text-6xl font-medium  text-transparent ">
                $20
              </p>
            </div>

            <div className=" text-sm font-normal leading-tight text-black text-opacity-60">
              /month
              <br />
              (billed monthly)
            </div>
          </div>

          <ul className="  flex list-disc flex-col    gap-5">
            <li className="items-start justify-start">
              For Freelancers & Students{" "}
            </li>

            <li className=" items-start justify-start">Dynamic Rate Limits </li>

            <li className=" items-start justify-start">
              Unlimited Active Users{" "}
            </li>

            <li className="items-start justify-start">
              Add Ons + Community Support{" "}
            </li>
          </ul>
        </div>

        <div className=" flex items-center gap-12">
          <div>
            <div className=" flex  flex-col gap-8 ">
              <div className="  flex items-center gap-5">
                <div className=" text-sm font-normal leading-tight text-black text-opacity-60">
                  /month
                  <br />
                  (billed monthly)
                </div>

                <div className="flex justify-end text-right ">
                  <div className="textgradient  text-6xl font-medium  text-fuchsia-500">
                    $40
                  </div>
                </div>
              </div>

              <ul dir="rtl" className=" flex list-disc flex-col     gap-5">
                <li className="items-start justify-start">
                  For Freelancers & Students{" "}
                </li>

                <li className=" items-start justify-start">
                  Dynamic Rate Limits{" "}
                </li>

                <li className=" items-start justify-start">
                  Unlimited Active Users{" "}
                </li>

                <li className="items-start justify-start">
                  Add Ons + Community Support{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-12 rounded-md bg-black p-3 text-white">
        Start your 14-day trial
      </button>

      <Image
        src={"./svgs/homePageBall.svg"}
        alt="trustAuthX-ball"
        width={800}
        height={800}
        className="absolute -top-36 -z-20"
      />
    </div>
  );
}

function SubscribePart() {
  return (
    <div className="relative mt-40 h-screen w-full">
      <Image
        width={900}
        height={630}
        src={"./svgs/HomePageGradient.svg"}
        className="absolute left-0 top-32  -z-10"
        alt="trustauthx_gradient"
      />

      <Image
        src={"./svgs/Grid.svg"}
        alt="trustauthx_grid"
        className="absolute   right-0 top-20 -z-10"
        width={1100}
        height={1100}
      />

      <div className="flex h-full items-center justify-center">
        <div className="Frame824636 inline-flex  flex-col items-center justify-start gap-2">
          <Image alt="logo" width={123} height={123} src={"./svgs/logo.svg"} />
          <div className="  mt-12 text-6xl font-semibold text-black">
            TrustAuthX
          </div>
          <div className=" text-3xl font-normal text-black">
            Subscribe to our newsletter
          </div>

          <div className="mt-12 flex  flex-col">
            <div className=" mb-2 text-black">
              Get product updates, company news, and more.
            </div>
            <div className="flex items-center gap-6">
              <input
                type="text"
                className="h-12 w-[335px] rounded-md border  bg-transparent"
              />
              <button className=" w- rounded-md bg-black  p-3 text-white">
                Start your 14-day trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CopyrightInfo() {
  return (
    <div className="Group12456 mt-10 flex flex-wrap gap-20 lg:gap-60">
      <div className="flex w-full flex-col items-center justify-center gap-7   lg:w-auto lg:items-start lg:justify-normal">
        <div className="Frame824639   inline-flex  flex-col items-start justify-start gap-5">
          <div className="Frame824627 flex flex-col items-start justify-start gap-0.5 self-stretch">
            <div className="FlitchcoinSupport text-base font-bold text-zinc-800">
              FlitchCoin Support
            </div>
            <div className="SupportFlitchcoinCom text-center text-base font-light tracking-tight text-zinc-800">
              support@flitchcoin.com
            </div>
          </div>
          <div className="Frame824628 flex flex-col items-start justify-start gap-0.5">
            <div className="InvestorRelation text-base font-bold text-zinc-800">
              Investor Relation
            </div>
            <div className="InvestFlitchcoinCom text-center text-base font-light tracking-tight text-zinc-800">
              invest@flitchcoin.com
            </div>
          </div>
        </div>

        <div className="  grid h-24 w-52 grid-cols-4 items-end justify-start gap-2.5">
          <Image width={44} height={44} src={"./svgs/Youtube.svg"} alt="icon" />
          <Image
            width={44}
            height={44}
            src={"./svgs/Instagram.svg"}
            alt="icon"
          />
          <Image width={44} height={44} src={"./svgs/Reddit.svg"} alt="icon" />
          <Image
            width={44}
            height={44}
            src={"./svgs/LinkedIn.svg"}
            alt="icon"
          />
          <Image width={44} height={44} src={"./svgs/Medium.svg"} alt="icon" />
          <Image width={44} height={44} src={"./svgs/Twitter.svg"} alt="icon" />
          <Image width={44} height={44} src={"./svgs/Github.svg"} alt="icon" />
          <Image width={44} height={44} src={"./svgs/Discord.svg"} alt="icon" />
        </div>

        <div className="2023Trustauthx    w-36 text-base font-normal text-zinc-800">
          © 2023 Trustauthx.
        </div>
      </div>

      <div>
        <div className="Frame824623   inline-flex flex-wrap  items-start justify-end gap-28">
          <div className="Frame824626 inline-flex shrink grow basis-0 flex-col items-start justify-start gap-5 self-stretch">
            <div className="Platform w-40 text-base font-semibold text-black">
              Platform
            </div>
            <div className="AccessManagement text-base font-normal text-black">
              Access Management{" "}
            </div>
            <div className="Partners  text-base font-normal text-black">
              Partners
            </div>
            <div className="Electron  text-base font-normal text-black">
              Electron
            </div>
            <div className="GithubDesktop  text-base font-normal text-black">
              GitHub Desktop
            </div>
          </div>

          <div className="Frame824623 inline-flex shrink grow basis-0 flex-col items-start justify-start gap-5 self-stretch">
            <div className="Product  text-base font-semibold text-black">
              Product
            </div>
            <div className="Features  text-base font-normal text-black">
              Features
            </div>
            <div className="Security  text-base font-normal text-black">
              Security
            </div>
            <div className="Team  text-base font-normal text-black">Team</div>
            <div className="Enterprice  text-base font-normal text-black">
              Enterprice
            </div>
          </div>

          <div className="Frame824624 inline-flex shrink grow basis-0 flex-col items-start justify-start gap-5 self-stretch">
            <div className="Developers  text-base font-semibold text-black">
              Developers{" "}
            </div>
            <div className="Docs  text-base font-normal text-black">Docs</div>
            <div className="CommunityForum  text-base font-normal text-black">
              Community Forum
            </div>
            <div className="Apis  text-base font-normal text-black">APIs</div>
            <div className="PremiumSupport  text-base font-normal text-black">
              Premium Support
            </div>
          </div>

          <div className="Frame824625 inline-flex shrink grow basis-0 flex-col items-start justify-start gap-5 self-stretch">
            <div className="Company w-32 text-base font-semibold text-black">
              Company
            </div>
            <div className="About  text-base font-normal text-black">About</div>
            <div className="Blog  text-base font-normal text-black">Blog</div>
            <div className="Careers  text-base font-normal text-black">
              Careers
            </div>
            <div className="TermsOfUse  text-base font-normal text-zinc-800">
              Terms of Use
            </div>
          </div>
        </div>

        <div className="Frame824630 inline-flex  flex-col items-start justify-start gap-8">
          <div className="Frame824627 shrink grow basis-0 self-stretch" />
          <div className="Frame824628" />
        </div>
      </div>
    </div>
  );
}
