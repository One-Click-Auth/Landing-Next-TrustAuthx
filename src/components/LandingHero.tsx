import InteractivePrism from './interactivePrism'
import { LowCode } from './svgs/low-code'

export default function LandingHero() {
return (
	<>
		<InteractivePrism bgColor='black' height="86rem" />
		<h1 className="text-white text-7xl absolute text-left top-64 left-20 p-0">
			TrustAuthX Light <br/>for Business, <br />
			Delight for Devs.
		</h1>
		<button className="text-white absolute text-left top-[32rem] left-20 flex items-center gap-3 border-[#F35815] border-2 rounded-full z-10 py-3 px-5">
			Let’s Get Started for Free <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
			<path d="M1.07031 11.6711L5.53902 7.20241C5.60516 7.13644 5.65764 7.05806 5.69344 6.97178C5.72925 6.88549 5.74768 6.79299 5.74768 6.69957C5.74768 6.60616 5.72925 6.51365 5.69344 6.42737C5.65764 6.34108 5.60516 6.26271 5.53902 6.19674L1.07031 1.72803" stroke="#F35815" strokeWidth="2.13066" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
		</button>
		{/*<LowCode />*/}
	</>
)
}