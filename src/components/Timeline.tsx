import React from "react";
import {
  PercentageSVG,
  PercentageSVGThird,
  PercentageSVGSecondTimeline,
} from "./timeline/Components";
import { TimelineCard } from "./timeline/TimelineCard";
import { Information } from "./timeline/Information";
import Carousel from "./timeline/CarouselSlider";
import ArrowIcon from "./ArrowIcon";

function Timeline() {
  return (
    <>
      <div className="flex px-12 py-12 2xl:py-0 2xl:pl-44 2xl:pr-[130px]">
        <div className="flex max-w-[160px] flex-col items-center justify-center">
          <img src="/timeline/first.svg" alt="" />

          <img src="/timeline/8-icon.svg" alt="" />

          <img src="/timeline/8.svg" alt="" />

          <img src="/timeline/7-icon.svg" alt="" />

          <img src="/timeline/7.svg" alt="" />

          <img src="/timeline/6-icon.svg" alt="" />

          <img src="/timeline/6.svg" alt="" />
        </div>

        <div className="mt-[750px] flex-1">
          <div className=" flex flex-col gap-9">
            <div className="text-4xl font-bold  text-black">Overview</div>

            <div className=" px-6">
              <span className="text-6xl font-bold  text-indigo-400">
                Embed security into the developer workflow.
                <br className="hidden 2xl:flex" />
              </span>
              <span className="text-6xl font-bold  text-black">
                With GitHub, developers can secure their
                <br className="hidden 2xl:flex" />
                code in minutes and organizations can
                <br className="hidden 2xl:flex" />
                automatically comply with regulations.
              </span>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col items-center justify-between  xl:flex-row 2xl:ml-10 ">
            <div className="mt-[390px] flex flex-col gap-[550px]">
              <Information
                preHeader="Trim Costs, Boost Efficiency"
                buttonLink=""
                header="Save Time and Money with TrustAuthx
                Auth-Lite"
                ButtonText="Let’s Get Started It’s Free"
              >
                <div
                  className=" mt-20 max-w-[513px] text-lg font-bold leading-7 text-neutral-600
"
                >
                  <p>
                    {`TrustAuthx not only simplifies your user, token and session
											management but also trims your expenses significantly. Say
											goodbye to costly alternatives that can set you back. With
											AuthLite, you'll save valuable time and also enjoy over 65%
											in savings. It's a win-win for your efficiency and your
											budget.`}
                  </p>
                </div>
              </Information>

              <Information
                preHeader="TrustAuthx Log-On"
                buttonLink=""
                header="Drive faster Conversions with Auth-Lite Log-On"
                customButton={
                  <div className="mt-14 flex gap-7">
                    <button className="mt-6 flex w-64 items-center justify-center gap-2 rounded-[18711.455px] border-[1.1px] border-[#DDD] bg-black py-2  font-bold text-white">
                      Learn more about Connect
                      <ArrowIcon />
                    </button>
                    <button className="mt-6 flex w-44 items-center justify-center gap-2 rounded-[4807.455px] border-[1.1px] border-[#DDD] bg-white py-2 font-bold text-black">
                      {`Let's get started`}
                      <ArrowIcon />
                    </button>
                  </div>
                }
                ButtonText="Let’s Get Started It’s Free"
              >
                <div
                  className=" mt-20 max-w-[513px] text-lg font-bold leading-7 text-neutral-600
"
                >
                  <p>
                    {`A Smoother Signup Experience. We've re-imagined the signup
											process, significantly reducing the time it takes,
											benefiting everyone involved, and ultimately enhancing
											conversion rates. Say goodbye to lengthy signups and hello
											to quicker results.`}
                  </p>
                  <div className="my-6 h-[1px] border border-gray-300"></div>
                  <p className="text-[#2C2C2C]">
                    {`No More Separate Sign-Up and Log-In Processes. Our
											straightforward 'Log-On' eliminates the need for separate
											sign-up and log-in steps, making access swift and
											hassle-free.`}
                  </p>{" "}
                </div>
              </Information>
            </div>

            <div className=" mt-44 flex flex-col gap-[300px] ">
              <TimelineCard
                footerButtonText="See Pricing"
                header={"Reduce Auth Development Time &"}
                footerLink={""}
                footerText="TrustAuthx Auth-lite offers
              a fully managed, user-friendly solutionfor system security,
               saving you over 90% compared to similar systems that typically cost
                around $500/month."
              >
                <div
                  className="mt-2 bg-gradient-to-r from-white to-black  bg-clip-text
               text-center text-4xl font-bold  text-transparent"
                >
                  Save Cost up-to
                </div>

                <div className="mt-7 flex items-center justify-center gap-16 ">
                  <PercentageSVG>90%</PercentageSVG>
                  <PercentageSVGSecondTimeline>65%</PercentageSVGSecondTimeline>
                </div>
              </TimelineCard>

              <TimelineCard
                footerButtonText="See Log-on"
                header={
                  "Auth-Lite Log-on can give conversion by mitigating account Creation process "
                }
                footerLink={""}
                footerText="According to a study by HubSpot, 38% of people will abandon a form if they have to create an account."
              >
                <div className=" flex items-center">
                  <div
                    className="
               mr-1 text-center text-5xl font-bold text-white  "
                  >
                    Up by :)
                  </div>

                  <PercentageSVGThird>138%</PercentageSVGThird>
                </div>
              </TimelineCard>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-radial-gradient flex flex-1 px-12 py-12 2xl:py-0 2xl:pl-44 2xl:pr-[130px]">
        <div className="flex max-w-[160px] flex-col items-center justify-center">
          <div className="relative ">
            <img src="/timeline/glow.svg" className=" " alt="" />

            <img
              src="/timeline/5-icon.svg"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              alt=""
            />
          </div>
          <img src="/timeline/4.svg" alt="" />

          <img src="/timeline/3-icon.svg" alt="" />

          <img src="/timeline/3.svg" alt="" />

          <img src="/timeline/2-icon.svg" alt="" />
          <img src="/timeline/2.svg" alt="" />
          <img src="/timeline/1-icon.svg" alt="" />
          <img src="/timeline/1.svg" alt="" />
        </div>
        {/* required
         */}

        <div className=" flex flex-col gap-9 py-2">
          <div className="mt-24 px-6">
            <span className="text-6xl font-bold  text-[#90E900]">
              LLMAI, Transformer Model for Cybersecurity:
            </span>
            <span className="text-6xl font-bold  text-white">
              Enable real-time inference
              <br className="hidden 2xl:flex" />
              on extensive telemetry data, including raw
              <br className="hidden 2xl:flex" />
              packets, to swiftly detect & respond to live
              <br className="hidden 2xl:flex" />
              threats.
            </span>

            <button className="mt-14 flex w-64 items-center justify-center gap-2 rounded-[14807.455px] border-[1.1px] border-[#DDD] bg-black py-2 font-bold text-white">
              Request Enterprise Access
              <ArrowIcon />
            </button>
          </div>
          {/* button */}

          {/* placing next to each other */}

          <div className=" flex  flex-1 flex-col  justify-between xl:flex-row 2xl:ml-10 ">
            <div className="mt-[325px] flex flex-col  gap-[550px] ">
              <Information
                whiteText
                preHeader="Maximize Speed"
                buttonbg
                buttonLink=""
                header="Get access to
  High-Performing Caching Infrastructure"
                ButtonText="Let’s Get Started It’s Free"
              >
                <div
                  className=" mt-20 max-w-[513px] text-lg font-bold leading-7
                   text-white
"
                >
                  Speed matters when its about authentication, conversion, token
                  maintenance or security with TrustAuthx Auth-lite High
                  performing caching infrastructure get all your data accessed
                  at the speed of internet .
                </div>
              </Information>

              <Information
                preHeader="Integrate in 2 min "
                buttonLink=""
                whiteText
                header="Resembling Auth 2.0, our system exemplifies the beauty of standardized simplicity."
                customButton={
                  <div className="mt-[51px] flex gap-10 ">
                    <button className="mt-6 flex w-64 items-center justify-center gap-2 rounded-[18711.455px] border-[1.1px] border-[#DDD] bg-black py-2  font-bold text-white">
                      Learn more about Connect
                      <ArrowIcon />
                    </button>
                    <button className="mt-6 flex w-[180px] items-center justify-center gap-2 rounded-[4807.455px] border-[1.1px] border-[#DDD] bg-white py-2 font-bold text-black">
                      {`Let's get started`}
                      <ArrowIcon />
                    </button>
                  </div>
                }
                ButtonText="Let’s Get Started It’s Free"
              >
                <div
                  className="mt-6 flex max-w-[513px] flex-col  gap-[52px] text-lg font-bold leading-7 text-neutral-600
"
                >
                  <p className="text-lg font-semibold  text-white">
                    Embrace the elegance of standardized simplicity, making
                    security and user access straightforward. With its user-
                    friendly approach, navigating authentication and
                    authorization has never been easier.
                  </p>

                  <div>
                    <span className=" text-[#E0E0E0] ">
                      Extract data from other Auth2.O sources
                    </span>

                    <div className="my-6 border border-[#BABABA]"></div>

                    <span className="text-[#E0E0E0] ">
                      Supports analytical & Dependency workflows
                    </span>
                  </div>
                </div>
              </Information>

              <Information
                whiteText
                preHeader="Save your Resources"
                ButtonText=""
                className="mb-12 2xl:mb-64"
                customButton={<></>}
                buttonLink=""
                header="Get Benefited with large Co-Relational Data warehouses  "
              >
                <div
                  className=" mt-20 max-w-[513px] text-lg font-bold leading-7
                   text-[#E7E7E7]
"
                >
                  Make your PlanetScale data accessible across your organization
                  by safely extracting and loading data from Planet into other
                  databases, such as BigQuery, Snowflake, or Redshift.
                </div>
              </Information>
            </div>

            {/* next part */}
            <div className=" mt-44 flex flex-col gap-[300px] ">
              <TimelineCard
                footerButtonText="See Pricing"
                header={"Reduce Auth Development Time &"}
                footerLink={""}
                footerText="TrustAuthx Auth-lite offers
              a fully managed, user-friendly solutionfor system security,
               saving you over 90% compared to similar systems that typically cost
                around $500/month."
              >
                <div
                  className="mt-2 bg-gradient-to-r from-white to-black  bg-clip-text
               text-center text-4xl font-bold  text-transparent"
                >
                  Save Cost up-to
                </div>

                <div className="mt-7 flex items-center justify-center gap-16 ">
                  <PercentageSVG>90%</PercentageSVG>
                  <PercentageSVGSecondTimeline>65%</PercentageSVGSecondTimeline>
                </div>
              </TimelineCard>

              <div className="  flex flex-col items-center justify-center gap-12 rounded-2xl bg-black  shadow-lg shadow-zinc-800 ">
                <div className="max-w-[490px] py-12   ">
                  <div className="   text-center">
                    <span className="bg-gradient-to-r  from-yellow-400 to-orange-500 bg-clip-text text-4xl font-bold leading-10 text-transparent">
                      Get Speed & Supercharge your App with high-performing
                      Caching Servers
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pb-6">
                  <img src="/timeline/speedCard/1.svg" alt="" />
                  <img src="/timeline/speedCard/2.svg" alt="" />
                  <img src="/timeline/speedCard/3.svg" alt="" />
                  <img src="/timeline/speedCard/4.svg" alt="" />
                </div>
              </div>

              <div className="shad rounded-2xl bg-black shadow-lg shadow-zinc-800 ">
                <img src="/timeline/lastcard.svg" className="" alt="" />

                <div className=" rounded-b-2xl bg-[#1A1A1A] px-12 py-7">
                  <div className=" w-96 text-lg font-bold leading-loose text-neutral-50">
                    Say goodbye to Multiple validation of same user. Our managed
                    infra. helps to save large amount of validation resource
                    using a CDW.
                  </div>

                  <button
                    className="mt-6 flex items-center justify-center
            gap-2 rounded-full border-white  py-1 font-bold text-white"
                  >
                    Data Wrenching <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-12 2xl:pl-44 2xl:pr-[130px]">
        <div className="flex max-w-[160px] flex-col items-center ">
          <img src="/timeline/last-icon.svg" alt="" />
          <img src="/timeline/last.svg" alt="" />
        </div>

        <div className=" mt-40 flex flex-1 flex-col gap-9">
          <div className="text-4xl font-bold  text-black">
            Checkout What They Say?{" "}
          </div>

          <div className="px-6">
            <span className="text-[68px] font-bold leading-[75.344px] tracking-[-2px]  text-indigo-400  2xl:whitespace-nowrap">
              Embed security into the developer workflow.
              <br className="hidden 2xl:flex" />
            </span>
            <span className="text-[68px] font-bold leading-[75.344px]  tracking-[-2px]  text-black">
              With GitHub, developers can secure.
            </span>
          </div>

          <div className="mt-28 flex flex-col  items-center  justify-between gap-14 px-6  pb-6 xl:flex-row 2xl:gap-6">
            <Carousel>
              {[
                <GradientCard
                  header="Absolute Blessing"
                  logo="/timeline/moonlightnexus.svg"
                  description="TrustAuthx Auth-lite offers a fully managed, user-friendly solution for system security, saving you over 90% compared to similar systems that typically cost around $500/month."
                  footer="Reduce Auth Development Time & Save Cost up-to : "
                  number="90"
                  key="Abs Blessing"
                />,
                <GradientCard
                  header="Absolute Blessing"
                  logo="/timeline/moonlightnexus.svg"
                  description="TrustAuthx Auth-lite offers a fully managed, user-friendly solution for system security, saving you over 90% compared to similar systems that typically cost around $500/month."
                  footer="Reduce Auth Development Time & Save Cost up-to : "
                  number="90"
                  key="Abs rearea"
                />,
              ]}
            </Carousel>

            <div className=" flex flex-col  gap-16">
              <div className="  text-[22px] font-bold leading-snug text-black">
                Make your PlanetScale data accessible across your
                <br />
                organization by safely extracting and loading data from
                <br />
                PlanetScale into other databases, such as BigQuery,
                <br />
                Snowflake, or Redshift.
              </div>

              <div className=" flex flex-col gap-8">
                <div className=" text-xl font-bold leading-7 text-zinc-800">
                  Extract data to other sources
                </div>

                <div className="h-[1px] w-full bg-[#2C2C2C]"></div>

                <div className=" text-xl font-bold leading-7 text-zinc-800">
                  Supports analytical workflows
                </div>
              </div>

              <div className="flex items-center gap-9">
                <button
                  className=" flex  w-80
            items-center justify-center gap-2 rounded-full border-2
            border-black bg-white  py-2  text-xl font-bold  text-black"
                >
                  Learn more about Connect
                  <ArrowIcon />
                </button>

                <button
                  className=" flex w-60 items-center
            justify-center gap-2 rounded-full bg-black py-2
             text-xl  font-bold text-white"
                >
                  Let’s Get Started
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function GradientCard({
  logo,
  number,
  header,
  description,
  footer,
}: {
  logo: string;
  number: string;
  header: string;
  description: string;
  footer: React.ReactNode;
}) {
  return (
    <div className="timeline-gradientcard-gradient rounded-2xl p-10">
      <div className="flex items-center justify-between">
        <img
          src="https://s3-alpha-sig.figma.com/img/9d6d/cfc1/fb8cd40116ca161e463af1ee400a729e?Expires=1694995200&Signature=h1x8zYIEcksM6fh5RDvQ4ECeihTfQdeHloWbzDadukMpZBhws9lPBpMFh-9XIsh2k3CKZCczKPLoIxMJ89vpq8As2DCiADJsSbOXBta1gsOFEXhmuZIO638pHgvaiGW-T-tD4RQEWmWp9Q~rhQYxDM7EuRFbVF6nim-zphAKrdfJXTsqypezfRZonQvppbMt35BOVo81-yGeDBtfmg1FJln3jr-AwlpSa95SZHA4~M4nd-FcwqDG00g5NDx~koYZpLylO-J2UTHAlxnHN6QGkuVfhCmGTvCOb9gAo9Nrp-Hw9Vsgz6gYT8WQYKeIP-3TWBZnTLX5mFgaiCfEks2u4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          className="h-16 w-16 rounded-full"
          alt=""
        />

        <GradientCardSvg>{number} </GradientCardSvg>
      </div>

      <div className="mt-14 flex flex-col gap-4">
        <img src={logo} className="max-w-[240px]" alt="" />

        <div className="   text-5xl font-bold  text-white">{header}</div>

        <div className=" max-w-[450px] text-justify text-lg font-bold  text-neutral-50">
          {description}
        </div>
      </div>

      <div className="mt-7 max-w-[450px]">
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-[43px] font-bold leading-10 text-transparent">
          {footer}
        </span>
      </div>
    </div>
  );
}

function GradientCardSvg({ children }: { children: React.ReactNode }) {
  return (
    <div className=" relative flex items-center  justify-center rounded-full ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="71"
        viewBox="0 0 72 71"
        fill="none"
      >
        <path
          d="M69.709 35.3555C69.709 27.3471 66.8503 19.6017 61.6474 13.5135C56.4446 7.42539 49.2394 3.39443 41.3288 2.14627C33.4182 0.89811 25.3219 2.51473 18.4972 6.70512C11.6726 10.8955 6.56791 17.3844 4.10209 25.0038C1.63627 32.6232 1.97128 40.8725 5.04681 48.2668C8.12235 55.6612 13.7364 61.7148 20.8783 65.338C28.0203 68.9612 36.221 69.916 44.0044 68.0305C51.7877 66.145 58.6423 61.5431 63.3344 55.0531"
          stroke="url(#paint0_radial_542_8816)"
          strokeWidth="2.97523"
          strokeLinecap="round"
        />
        <defs>
          <radialGradient
            id="paint0_radial_542_8816"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(64.9061 55.6585) rotate(-147.529) scale(74.0076 74.0074)"
          >
            <stop stopColor="#AD00FF" />
            <stop offset="0.754348" stopColor="#FFF500" />
            <stop offset="0.961618" stopColor="white" />
          </radialGradient>
        </defs>
      </svg>

      <p className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl  font-semibold text-white">
        {children}
      </p>
    </div>
  );
}

export default Timeline;
