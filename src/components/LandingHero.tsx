import InteractivePrism from './interactivePrism'
import { LowCode } from './svgs/low-code'

export default function LandingHero() {
return (
	<>
		<InteractivePrism bgColor='black' height="86rem" />
		<h1 className="text-white text-7xl absolute text-left top-36 p-28">
			TrustAuthX Light <br/>for Business, <br />
			Delight for Devs.
		</h1>
		{/*<LowCode />*/}
	</>
)
}