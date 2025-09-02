import SocialButtonRow from "@/components/SocialButtonRow";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="font-display text-3xl">PIQUE</a>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/#events" className="text-neutral-300 nav-link">Shows</Link>
                    <Link href="/#music" className="text-neutral-300 nav-link">Music</Link>
                    <Link href="/#merch" className="text-neutral-300 nav-link">Merch</Link>
                    <Link href="/contact" className="text-neutral-300 nav-link">Contact</Link>
                </div>
                <div className="max-sm:hidden">
                    <SocialButtonRow/>
                </div>

            </nav>
        </header>


    )
}