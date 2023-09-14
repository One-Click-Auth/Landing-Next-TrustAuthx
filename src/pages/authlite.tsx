import Image from 'next/image'
import React from 'react'
import { ChevronRight } from "lucide-react"
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function authlite() {
    return (
        <div
            style={{ background: "radial-gradient(161.01% 103.41% at -1.12% 6.78%, #434343 0%, #000 88.95%, #000 100%)" }}
            className='py-12 px-8 max-w-[1400px] m-auto rounded-lg text-white'
        >
            <div className='flex gap-6 items-center  ' >
                <p className='border-l-4 py-2 pl-3 border-red-600  text-3xl font-semibold' >Auth-lite</p>
                <Image src="/assets/connect.svg" width={80} height={80} alt='connect' className='mt-3' />
                <p className='font-semibold text-xl'>Designed, <br /> To save Time</p>
            </div>

            <div className='flex flex-col-reverse lg:flex-row mt-8 gap-8' >
                <div className='font-light lg:min-w-max' >

                    <p className='min-w-lg lg:max-w-lg' >
                        A thoughtfully designed, fully managed system created to supercharge the development of enterprise-grade applications. It provides top-tier security and token management, offers customizable UI options, all backed by high-powered caching servers. With Auth-Lite, we&apos;re putting developers first on their journey towards accelerated, hassle-free development.
                    </p>

                    <p className='border-b-2 max-w-max pb-6 mt-6' >Auth-Lite: Empowering Developers with Elevated Efficiency</p>
                    <p className='mt-6' >Auth-Lite is the developer&apos;s dream</p>

                    <div className='mt-10' >
                        <Link href="/" className={cn(buttonVariants({ variant: "outline", className: "sm:rounded-full" }))} >
                            Learn more about Auth-Lite <ChevronRight className='text-red-500' />
                        </Link> <br className='sm:hidden' />
                        <Link href="/" className={cn(buttonVariants({ variant: "default", className: "sm:ml-6 mt-4 sm:mt-0 sm:rounded-full bg-white text-black font-semibold" }))} >
                            Let&apos;s Get Started <ChevronRight className='text-red-500' />
                        </Link>
                    </div>

                </div>
                <div>
                    <Image src="/assets/connect-hero.svg" width={800} height={500} className='min-w-full w-full h-auto object-fill' alt='conections' />
                </div>
            </div>

            <p className='mt-8 text-sm max-w-[260px] sm:ml-auto' > <PlusSvg /> Authorize, Authenticate & Maintain your user Token & Sessions.</p>
        </div >
    )
}

export default authlite


const PlusSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
            <path d="M13.8789 7.68359V21.5452" stroke="#17CA2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.94922 14.6152H20.8109" stroke="#17CA2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}