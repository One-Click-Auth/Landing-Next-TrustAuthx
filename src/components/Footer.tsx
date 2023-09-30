import Image from "next/image";
import HomePageGradient from "../../public/svgs/HomePageGradient.svg";
import Grid from "../../public/svgs/Grid.svg";
import Logo from "../../public/svgs/Logo.svg";

export default function Footer() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
      <PricingPart />

      <SubscribePart />

      <CopyrightInfo />
    </div>
  );
}

function PricingPart() {
  return (
    <div className="relative flex flex-col  items-center justify-center md:w-[850px]">
      <div className="DivSectionHeader   inline-flex flex-col items-center  justify-start gap-2.5">
        <div
          className="gradientbg flex h-7 w-24 items-center justify-center rounded-3xl bg-gradient-to-r text-center"
          id="pricing"
        >
          <div className=" text-sm font-medium leading-none text-stone-900 text-opacity-40">
            Get access
          </div>
        </div>

        <p className="text-center text-4xl font-medium leading-10 text-black">
          We like keeping things simple
          <br />
          Two plan Two price.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-24 md:flex-row">
        <div className="flex flex-col gap-8">
          <div className=" flex  items-center gap-5">
            <div className="flex">
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

              <ul dir="rtl" className=" flex list-disc flex-col gap-5">
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
        className="-top-36 -z-20 hidden md:absolute md:block"
      />
    </div>
  );
}

function SubscribePart() {
  return (
    <div className="relative h-screen w-full md:mt-40">
      <Image
        src={HomePageGradient}
        className="absolute left-0 top-96 -z-10 h-full w-full"
        alt="trustauthx_gradient"
      />

      <Image
        src={Grid}
        alt="trustauthx_grid"
        className="absolute  right-0 top-96 -z-10 h-full w-full"
      />

      <div className="flex h-full items-center justify-center">
        <div className="Frame824636 inline-flex  flex-col items-center justify-start gap-2">
          <Image alt="logo" src={Logo} />
          <div className="  mt-12 text-6xl font-semibold text-black">
            TrustAuthX
          </div>
          <div className=" text-center text-3xl font-normal text-black">
            Subscribe to our newsletter
          </div>

          <div className="mt-12 flex  flex-col">
            <div className=" mb-2 text-center text-black">
              Get product updates, company news, and more.
            </div>
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <input
                type="text"
                className="h-12 rounded-md border border-black bg-transparent md:w-[335px]"
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
    <div className="mt-10 flex flex-col flex-wrap gap-20 md:flex-row lg:gap-60">
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

        <div className="2023Trustauthx  text-base font-normal text-zinc-800">
          © 2023 Trustauthx.
        </div>
      </div>

      <div className="flex flex-col gap-16 md:flex-row md:gap-28">
        <div className="flex flex-col gap-5">
          <div className="Platform w-40 text-base font-semibold text-black">
            Platform
          </div>
          <div className="text-base font-normal text-black">
            Access Management
          </div>
          <div className="text-base font-normal text-black">Partners</div>
          <div className="text-base font-normal text-black">Electron</div>
          <div className="text-base font-normal text-black">GitHub Desktop</div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-base font-semibold text-black">Product</div>
          <div className="text-base font-normal text-black">Features</div>
          <div className="text-base font-normal text-black">Security</div>
          <div className="text-base font-normal text-black">Team</div>
          <div className="text-base font-normal text-black">Enterprice</div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-base font-semibold text-black">Developers</div>
          <div className="text-base font-normal text-black">Docs</div>
          <div className="w-fit text-base font-normal">Community Forum</div>
          <div className="text-base font-normal text-black">APIs</div>
          <div className="text-base font-normal text-black">
            Premium Support
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-base font-semibold text-black">Company</div>
          <div className="text-base font-normal text-black">About</div>
          <div className="text-base font-normal text-black">Blog</div>
          <div className="text-base font-normal text-black">Careers</div>
          <div className="text-base font-normal text-zinc-800">
            Terms of Use
          </div>
        </div>
      </div>
    </div>
  );
}
