import { meta, repositories } from "./constants";

export function Navbar() {
    const repos = repositories.length;

    return (
        <nav class="w-72 pt-3 border-r-2 border-r-neutral-200 box-border">
            <ul>
                <li><a class="text-brand hover:underline text-xl" href="/">Home</a></li>
                <li><a class="text-brand hover:underline text-xl" href="/links">Links</a></li>
                <li><span class="text-brand text-xl cursor-not-allowed">Drugs <i class="text-neutral-400 ml-1">7,052</i></span></li>
                <li><span class="text-brand text-xl cursor-not-allowed">Cannabis <i class="text-neutral-400 ml-1">1,275</i></span></li>
                <li><span class="text-brand text-xl cursor-not-allowed">Dissociatives <i class="text-neutral-400 ml-1">185</i></span></li>
                <li><span class="text-brand text-xl cursor-not-allowed">Ecstasy <i class="text-neutral-400 ml-1">787</i></span></li>
                <li><span class="text-brand text-xl cursor-not-allowed">Opioids <i class="text-neutral-400 ml-1">474</i></span></li>
                <li><span class="text-brand text-xl cursor-not-allowed">Other <i class="text-neutral-400 ml-1">439</i></span></li>
                <li><span class="text-brand text-xl cursor-not-allowed">Precursors <i class="text-neutral-400 ml-1">69</i></span></li>
                <li><span class="text-brand text-xl cursor-not-allowed">Prescription <i class="text-neutral-400 ml-1">1,585</i></span></li>
                <li><span class="text-brand text-xl cursor-not-allowed">Psychedelics <i class="text-neutral-400 ml-1">875</i></span></li>
                <li><span class="text-brand text-xl cursor-not-allowed">Stimulants <i class="text-neutral-400 ml-1">1,044</i></span></li>
                <li><a class="text-brand hover:underline text-xl" href="https://t.me/srdogcto" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                <li><a class="text-brand hover:underline text-xl" href="https://x.com/silkroaddog" target="_blank" rel="noopener noreferrer">X</a></li>
            </ul>
        </nav>
    );
}
