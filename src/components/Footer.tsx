import { meta } from "./constants";

export function Footer() {
    return (
        <footer class="flex justify-between mt-auto border-t-2 border-t-neutral-200 px-5 py-2">
            <p>Copyright &copy; {new Date().getFullYear()} Silk Road Dog</p>
        </footer>
    );
}