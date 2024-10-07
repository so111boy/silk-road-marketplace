import { meta } from "../components/constants";
const email = meta.email.split('//').join(' // ');

export function Home() {
	return (
		<>
			<h1 class="text-3xl font-medium mb-5">Hey. Welcome to the Silk Road Dog.</h1>
			
			<p class="text-xl">
				Would Bitcoin be where it is today if it weren't for Ross Ulbricht and the Silk Road?
				<br></br>
				It's a question that shakes the foundations of crypto history. While Satoshi Nakamoto gave us the blueprint, it was Ross who took that vision and set it on fire, blazing a trail that forever changed how we see and use digital currency.
			</p>

			<br/>

			<p class="text-xl">
				Ross Ulbricht didn't just create a marketplace; he created a movement. The Silk Road was the first large-scale proof that a decentralised, peer-to-peer economy could work in the real world. It put Bitcoin to the test, pushing it from an obscure digital token to a global phenomenon. Ross didn't just believe in the power of cryptocurrency—he demonstrated its potential, making Bitcoin mainstream faster than anyone could have imagined.
			</p>

			<br/>

			<p class="text-xl">
				Was it Ross or Satoshi who made Bitcoin what it is today? Satoshi gave us the dream, but Ross gave it life. $srDog honours this legacy, celebrating the courage and vision that dared to turn ideals into action. We are here to keep that spirit alive, to fight for freedom, decentralisation, and to see a world where innovation knows no chains.
			</p>

			<br/>

			<p class="text-xl">
				Our vision is simple: we stand with Ross Ulbricht. We believe in his fight, his story, and the call to set him free. With every $srDog token, we amplify that message, push for justice, and challenge the crypto community to remember its roots.
			</p>

			<br/>

			<p class="text-xl">
				Join the movement. Be the voice for those who dared to dream. Together, let's free Ross, reclaim the narrative, and take the Silk Road spirit to the next level!
			</p>
			<br/>
			<p class="text-xl">
				Our Contract Address: <span class="text-brand font-bold">FoQ4yi9FgpMocZ1syE4XGKEw3yAeDx9PK2TKn6SQpump</span>
			</p>
		</>
	);
}
