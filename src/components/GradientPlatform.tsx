import ArrowIcon from './ArrowIcon'
import AnimatedGradient from './gradients/AnimatedGradient'
import React from 'react'

export default function GradientPlatform () {
	return (
		<div className="-z-20 w-[97vw] m-auto mt-5 rounded-3xl bg-black py-24   text-gray-200 lg:rounded-[90px]">
			<div className="flex flex-col  items-center px-4">
				<div className="ml-36 flex max-h-[738px]  w-full max-w-[1240px] flex-col  flex-wrap gap-14  rounded-3xl px-4">
					<div className=" text-4xl font-semibold">
						TrustAuthx is the world’s most Easiest and
						<br />
						completely Managed Auth platform
					</div>

					<div className="flex items-center gap-2">
						<button className="flex items-center justify-center gap-2 rounded-full border border-white px-3 py-1">
							Get started <ArrowIcon />
						</button>

						<button className="flex items-center justify-center gap-2 rounded-full  border-white px-3 py-1">
							Schedule a demo <ArrowIcon />
						</button>
					</div>
				</div>
			</div>

			<div className="relative">
				<div className="flex items-center justify-center px-4">
					<div className=" relative  z-10 mt-6  h-full max-h-[738px] w-2/3 rounded-3xl  border border-white border-opacity-25 bg-white bg-opacity-5 p-12 shadow-inner">
						<img src="/page3.png" alt="imagetrustauthx" className="bg-cover" />
					</div>
				</div>
				<AnimatedGradient />
			</div>
		</div>
	);
}