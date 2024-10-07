import { meta } from "../components/constants";
const email = meta.email.split('//').join(' // ');

export function Links() {
	return (
		<>
            <h1 class="text-3xl font-medium mb-5">Links</h1>
			<p class="text-xl">
				Dexscreener: <a class="text-brand hover:underline font-bold" href="https://dexscreener.com/solana/7VNyrs1D4XbivYZrhSB7VyEs5DHrkwddLcvJCBYJjnsE" target="_blank" rel="noopener noreferrer">View on Dexscreener</a><br/>
				Dextools: <a class="text-brand hover:underline font-bold" href="https://www.dextools.io/app/en/solana/pair-explorer/7VNyrs1D4XbivYZrhSB7VyEs5DHrkwddLcvJCBYJjnsE?t=1728324616095" target="_blank" rel="noopener noreferrer">View on Dextools</a><br/>
				Gecko Terminal: <a class="text-brand hover:underline font-bold" href="https://www.geckoterminal.com/solana/pools/7VNyrs1D4XbivYZrhSB7VyEs5DHrkwddLcvJCBYJjnsE" target="_blank" rel="noopener noreferrer">View on Gecko Terminal</a><br/>
				Telegram: <a class="text-brand hover:underline font-bold" href="https://t.me/srdogcto" target="_blank" rel="noopener noreferrer">Join our Telegram</a><br/>
				X (Twitter): <a class="text-brand hover:underline font-bold" href="https://x.com/silkroaddog" target="_blank" rel="noopener noreferrer">Follow us on X</a><br/>
			</p>
		</>
	);
}
