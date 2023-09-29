"use client";

import React from "react";
import { AccountDropdown } from "./Dropdown";
import {
  ShowcaseCard,
  StartWithAiSparkles,
  PercentageSVGFirst,
  PercentageSVGSecond,
  TableItem,
  RedirectButton,
  ShowcaseSocialConnectionCard,
} from "./showcase/Components";
import CodeTabs from "./showcase/CodeTabs";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";

function Showcase() {
const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col  items-center justify-center p-6 sm:p-12">
      <div className="space-between flex max-w-[1110px] flex-col items-center gap-12 lg:flex-row xl:gap-48">
        <div className="flex flex-col gap-6">
          <p className="text-3xl md:text-5xl ">
            Powerful.Simple. And Sooo... Easy to Setup
          </p>

          <p className="text-xl text-[#777] md:text-[26px]">
            We made building Auth for sites easy, fast and Scalable while
            delivering best-in-class Security & performance
          </p>
        </div>

        <p className="block rotate-90 text-7xl leading-none md:text-[128px] lg:hidden">
          ;)
        </p>

        <p className="hidden text-[128px] leading-none lg:block">
          ;<span className="ml-4">)</span>{" "}
        </p>
      </div>

      <div className="mt-20 flex w-full max-w-screen-xl flex-col gap-6">
        <ShowcaseCard
          title={
            <p className="flex gap-1 text-2xl font-semibold text-white">
              Start with AI
              <StartWithAiSparkles />
            </p>
          }
          description={
            <div className="text-white">
              Generate a beautiful images for site,
              <br />
              set static or use as carousel.
            </div>
          }
          className="showcase-1  w-full"
        >
          <div className="relative  mt-10 flex h-[300px] w-full items-center justify-center bg-transparent ">
            <Image
              src="/showcase/1.png"
              alt=""
              width={1000}
              height={1000}
              className="absolute  bottom-0 bg-cover"
            />

            <div className="z-10 flex mx-auto flex-col items-center justify-center rounded-2xl bg-white p-5 px-8">
              <button
                className="flex items-center justify-center mx-auto showcase-1-btn
              w-[125px] gap-2 rounded-md py-2 pl-3 font-semibold text-white
              "
              >
                <StartWithAiSparkles />
                Generate
              </button>
              <div className="my-4 h-[1px] w-full bg-[#eee]" />

              <p>
                {" "}
                <strong>Pile of white rubik cubes in a red room, in anderson style.</strong>
              </p>
            </div>
          </div>
        </ShowcaseCard>

        <div className="grid auto-rows-[1fr] grid-cols-10    gap-6 lg:grid-rows-1">
          <ShowcaseCard
            title={
              <div className="text-2xl font-semibold ">
                Layout, Color & Social
              </div>
            }
            description={
              <div className="text-[#222]">
                Select form a range of customizations <br /> on Trustauthx
                server all kinds of
                <br />
                specialized requirements .
              </div>
            }
            className="  showcase-2 col-span-full w-full lg:col-span-6  "
          >
            <div className=" my-8 text-center text-6xl font-normal  text-neutral-800">
              Ship Fast with Style
            </div>

            <div className="relative hidden   h-[205px] w-full items-center justify-center bg-transparent sm:flex ">
              <img
                src="/showcase/2.png"
                alt=""
                className="absolute  bottom-0 left-0  w-full bg-cover"
              />
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title={
              <div className="  text-3xl font-normal  tracking-wide text-black">
                Overall{" "}
                <span className="text-3xl font-bold  tracking-wide text-white underline underline-offset-[6px]">
                  Cost{" "}
                </span>
                Reduction :
              </div>
            }
            description={
              <div className="text-white">
                Our Auth-Lite is built in such a way to
                <br />
                reduce overall cost minimum by 50% .
              </div>
            }
            className="showcase-3    col-span-full lg:col-span-4  "
          >
            <div className="showcase-3-width relative -mx-10    flex h-[340px] w-full items-center justify-center bg-transparent ">
              <PercentageSVGFirst> 65%</PercentageSVGFirst>

              <PercentageSVGSecond className="absolute -right-20 top-1/2 -translate-y-[52%]">
                {" "}
                28%
              </PercentageSVGSecond>

              <PercentageSVGSecond className="absolute -left-20 top-1/2 -translate-y-1/2">
                {" "}
                33%
              </PercentageSVGSecond>
            </div>
          </ShowcaseCard>
        </div>

        <div className="grid auto-rows-[1fr] grid-cols-10    gap-6 lg:grid-rows-1">
          <ShowcaseCard
            white
            title={
              <div className=" text-2xl font-normal leading-7 text-white">
                White-Labeled, Everything{" "}
              </div>
            }
            description={
              <div className=" w-64 text-base font-normal leading-snug text-white">
                Option to use your personal resources from email-servers to
                private-hosting
              </div>
            }
            className="showcase-4    col-span-full lg:col-span-4  "
          >
            <div
              className="showcase-3-width relative mx-4 flex h-[340px] 
             flex-col bg-transparent py-1 "
            >
              <div className="flex gap-16  text-[82px] text-white">
                <p>Custom</p>
                <p className="underline underline-offset-[12px]">Depl</p>
              </div>

              <img
                src="/showcase/4.png"
                alt=""
                className="absolute -left-10 bottom-0 bg-cover"
              />
              <img
                src="/showcase/4-2.png"
                alt=""
                className="absolute bottom-0 right-20 bg-cover"
              />
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            white
            title={
              <div className=" w-96  text-4xl font-normal leading-7 text-white">
                Low-Code is Enough
              </div>
            }
            description={
              <div className="mt-2 h-[38px] w-[292px] text-base font-normal leading-snug  text-white">
                Complete user Token Management solution all in caching servers.
              </div>
            }
            className="  showcase-5 col-span-full w-full lg:col-span-6  "
          >
            <div className="showcase-3-width relative z-10 -mx-10 flex    h-[360px] w-full flex-col items-center justify-center gap-3 bg-transparent ">
              <div className="absolute -right-1 bottom-0">
                <div className="">
                  <span className="text-[32px] font-medium leading-7 text-white">
                    Never
                  </span>
                  <span className="text-[32px] font-light leading-7 text-white">
                    {" "}
                    more than a{" "}
                  </span>
                  <span className="text-[32px] font-medium leading-7 text-white">
                    Class
                  </span>
                </div>

                {!isMobile ? (
                  <CodeTabs
                    pyFileName="TrustAuthx.py"
                    pyCode={
                      <div className="text-base font-normal text-white">
                        <p>
                          <span className="mr-[10px]  text-[#6E7681]">1</span>
                          <span className="text-[#FF7B72]">from </span>
                          <span className="text-white  ">
                            trustauthx.authlite{" "}
                          </span>
                          <span className="text-[#FF7B72]  ">import </span>
                          <span className="text-white  ">AuthLiteClient</span>
                        </p>

                        <span className="mr-[10px] text-base font-normal text-[#6E7681]">
                          2
                        </span>

                        <p>
                          <span className="mr-[10px] text-base font-normal text-[#6E7681]">
                            3
                          </span>
                          <span className="text-sky-300 ">client</span>
                          <span className="text-white "> = </span>
                          <span className="text-[#FF7B72] ">
                            AuthLiteClient
                          </span>
                          <span className="text-white ">(</span>
                        </p>

                        <div className="flex items-center">
                          <span className="mr-[10px] text-base font-normal text-[#6E7681]">
                            4
                          </span>

                          <div className="ml-10">
                            <span className="text-sky-300 ">api_key</span>
                            <span className="text-white "> = </span>
                            <span className="text-[#FF7B72] ">
                              {"f28ffe7f2e..."}
                            </span>
                            <span className="text-white ">,</span>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <span className="mr-[10px] text-base font-normal text-[#6E7681]">
                            5
                          </span>

                          <div className="ml-10">
                            <span className="text-sky-300 ">secret_key</span>
                            <span className="text-white "> = </span>
                            <span className="text-[#FF7B72] ">
                              {"f28ffe7f2e..."}
                            </span>
                            <span className="text-white ">,</span>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <span className="mr-[10px] text-base font-normal text-[#6E7681]">
                            6
                          </span>

                          <div className="ml-10">
                            <span className="text-sky-300 ">org_id</span>
                            <span className="text-white "> = </span>
                            <span className="text-[#FF7B72] ">
                              {"f28ffe7f2e..."}
                            </span>
                            <span className="text-white ">,</span>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <span className="mr-[10px] text-base font-normal text-[#6E7681]">
                            7
                          </span>

                          <div className="ml-44">)</div>
                        </div>

                        <p className="">
                          <span className="mr-[10px] text-base font-normal text-[#6E7681]">
                            8
                          </span>
                          <span className="text-white  ">def </span>
                          <span className="text-[#FF7B72]  ">get_auth_</span>
                          <span className="text-white  ">():</span>
                        </p>
                      </div>
                    }
                    jsFileName="Auth.js"
                    goFileName="TrustAuthx.go"
                  />
                ) : null}
              </div>
            </div>

            {/* things to make the background */}
            <img
              src="/showcase/code-section/cone.svg"
              className="absolute bottom-[40%] left-0 "
              alt=""
            />
            <img
              src="/showcase/code-section/circle-1.svg"
              className="absolute bottom-0 left-0 "
              alt=""
            />

            <img
              src="/showcase/code-section/circle-2.svg"
              className="absolute bottom-28 left-20 "
              alt=""
            />

            <img
              src="/showcase/code-section/circle-3.svg"
              className="absolute right-0 top-1/2 -translate-y-1/2 "
              alt=""
            />
          </ShowcaseCard>
        </div>

        <div className="grid auto-rows-[1fr] grid-cols-10    gap-6 lg:grid-rows-1">
          <div
            className={
              "   showcase-6-shadow relative col-span-full w-full overflow-hidden rounded-[20px]   lg:col-span-6"
            }
          >
            <div className="showcase-6 flex flex-col gap-2 rounded-none p-8   ">
              <div className="   text-2xl font-normal leading-7 text-white">
                Multi-Tenant-Accounts
              </div>

              <div className="w-64 text-base font-normal leading-snug text-white">
                Run as much as Organizations you want, all from same account.
              </div>
            </div>

            <div className="relative     w-full    bg-transparent p-4 pt-0  ">
              <div className="flex items-center justify-between p-4 px-5 text-[#999]">
                <p>Name</p>

                <div className="hidden items-center gap-14 sm:flex">
                  <p>ValidityDate</p>
                  <p>Logo</p>
                  <p>img</p>
                </div>
              </div>

              <div className="h-[1px] w-full  bg-[#eee]"> </div>

              <TableItem
                name={"Cyno.io"}
                validityDate={"10 February 2014"}
                logo={"#0CF"}
                image={"1.png"}
              />

              <div className="h-[1px] w-full bg-[#eee]" />

              <TableItem
                name={"Rendroid.me"}
                validityDate={"18 January 2024"}
                logo={"#09F"}
                image={"2.png"}
              />

              <div className="h-[1px] w-full bg-[#eee]" />

              <TableItem
                name={"Explorer.something"}
                validityDate={"5 January 2024"}
                logo={"#1300FF"}
                image={"3.png"}
              />

              <div className="h-[1px] w-full bg-[#eee]" />

              <TableItem
                name={"Response.build"}
                validityDate={"28 December 2023"}
                logo={"#60F"}
                image={"4.png"}
              />

              <div className="h-[1px] w-full bg-[#eee]" />

              <TableItem
                name={"Its.Possible"}
                validityDate={"16 December 2023"}
                logo={"#90F"}
                image={"5.png"}
              />
            </div>

            <div className="absolute right-10 top-10 ">
              <RedirectButton white={true} />
            </div>
          </div>

          <ShowcaseCard
            white
            title={
              <div className=" text-2xl font-medium leading-7 text-white">
                Reduced Development Time
              </div>
            }
            description={
              <div className=" w-46 text-xl font-normal leading-snug text-white">
                <span>Build </span>
                <span className="text-xl font-semibold leading-snug text-white">
                  lightning-fast
                </span>
                <span>
                  , <br />
                  and Ship optimized sites.
                </span>
              </div>
            }
            className="showcase-7    col-span-full lg:col-span-4  "
          >
            <div className="showcase-3-width relative -mx-10    flex h-[340px] w-full items-center justify-center bg-transparent ">
              <PercentageSVGSecond className="absolute -left-20 top-1/2 -translate-y-1/2">
                {" "}
                95%
              </PercentageSVGSecond>

              <PercentageSVGFirst> 70%</PercentageSVGFirst>

              <PercentageSVGSecond className="absolute -right-20 top-1/2 -translate-y-[52%]">
                {" "}
                98%
              </PercentageSVGSecond>
            </div>
          </ShowcaseCard>
        </div>

        <div className="grid auto-rows-[1fr] grid-cols-10    gap-6 lg:grid-rows-1">
          <SocialConnectionCard />

          <ShowcaseCard
            white
            title={
              <div className=" text-2xl font-normal leading-7 text-white">
                From Manage User to User Management, <br />
                Everything done Right.{" "}
              </div>
            }
            description={
              <div className="  w-100 text-base font-normal leading-snug text-white">
                We make sure your site looks great & Works great
              </div>
            }
            className="  showcase-9 col-span-full w-full lg:col-span-6  "
          >
            <div className=" absolute left-1/2 z-10 -translate-x-1/2 scale-90 sm:right-1/3">
              <AccountDropdown />
            </div>

            <div
              className=" relative -mx-10   hidden   h-[325px] w-full items-center 
            justify-center bg-transparent sm:flex "
            >
              <img
                src="/showcase/9.svg"
                alt=""
                className="absolute -bottom-8   left-0   w-full max-w-[95%] bg-cover"
              />
            </div>
          </ShowcaseCard>
        </div>
      </div>
    </div>
  );
}

function SocialConnectionCard() {
  return (
    <ShowcaseCard
      title={
        <div className=" text-2xl font-normal leading-7 text-black">
          Social-Connection Plugins
        </div>
      }
      description={
        <div className="ConnectYourSiteToPopularApps w-48 text-base font-normal leading-snug text-black">
          Connect your site <br />
          to popular apps.
        </div>
      }
      className="showcase-6-shadow relative col-span-full lg:col-span-4  "
    >
      <div
        className=" relative mt-6    flex     
      w-full flex-col 
     items-center gap-3 bg-transparent "
      >
        <div className="  flex  items-center  gap-3">
          <ShowcaseSocialConnectionCard
            name={"Twitter"}
            logo={"/showcase/social-connection/Twitter.svg"}
            bgcolor={"#FF960A1A"}
            textcolor={"#1EA1F2"}
          />

          <ShowcaseSocialConnectionCard
            name={"Reddit"}
            logo={"/showcase/social-connection/Reddit.svg"}
            bgcolor={"#F559B01A"}
            textcolor={"#FC471E"}
          />

          <ShowcaseSocialConnectionCard
            name={"LinkedIn"}
            logo={"/showcase/social-connection/LinkedIn.svg"}
            textcolor={"#40B7FF"}
            bgcolor={"#6bd8ff26"}
          />

          <ShowcaseSocialConnectionCard
            name={"Google"}
            logo={"/showcase/social-connection/Google.svg"}
            bgcolor={"#17C8CA26"}
            textcolor={"#17C8CA"}
          />

          <ShowcaseSocialConnectionCard
            name={"Figma"}
            logo={"/showcase/social-connection/Figma.svg"}
            bgcolor={"#0000000D"}
            textcolor={"#999999"}
          />
        </div>

        <div className="flex items-center gap-3">
          <ShowcaseSocialConnectionCard
            name={"Spotify"}
            logo={"/showcase/social-connection/Spotify.svg"}
            bgcolor={"#19D85C26"}
            textcolor={"#19D85C"}
          />

          <ShowcaseSocialConnectionCard
            name={"Discord"}
            logo={"/showcase/social-connection/Discord.svg"}
            bgcolor={"#bf3ee11a"}
            textcolor={"#BF3EE1"}
          />

          <ShowcaseSocialConnectionCard
            name={"Microsoft"}
            logo={"/showcase/social-connection/Microsoft.svg"}
            bgcolor={"#ff6f0f26"}
            textcolor={"#FF6F0F"}
          />

          <ShowcaseSocialConnectionCard
            name={"Apple"}
            logo={"/showcase/social-connection/Apple.svg"}
            bgcolor={"#fa243b1a"}
            textcolor={"#FA263B"}
          />
        </div>

        <div className="flex items-center gap-3">
          <ShowcaseSocialConnectionCard
            big
            name={"Telegram"}
            logo={"/showcase/social-connection/Telegram.svg"}
            bgcolor={"#0000000D"}
            textcolor={"#999999"}
          />

          <ShowcaseSocialConnectionCard
            big
            name={"Github"}
            logo={"/showcase/social-connection/Github.svg"}
            bgcolor={"#FF89021A"}
            textcolor={"#000"}
          />

          <ShowcaseSocialConnectionCard
            big
            name={"Tiktok"}
            logo={"/showcase/social-connection/Tiktok.svg"}
            bgcolor={"#5893421a"}
            textcolor={"#FD355A"}
          />

          <ShowcaseSocialConnectionCard
            big
            name={"Facebook"}
            logo={"/showcase/social-connection/Facebook.svg"}
            bgcolor={"#2084881a"}
            textcolor={"#208488"}
          />
        </div>
      </div>
    </ShowcaseCard>
  );
}

export default Showcase;
