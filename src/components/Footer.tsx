import Typography from "@/components/Typography";
import SocialButtonRow from "@/components/SocialButtonRow";
import PiqueTypeface from "@/components/PiqueTypeface";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center py-10 bg-black text-neutral-300">
            <PiqueTypeface/>
            <Link href="/contact" className="text-neutral-300 nav-link hover:underline py-3">
                <Typography as="small">Contact Us</Typography>
            </Link>

            <div className="place-self-center">
                <SocialButtonRow/>
            </div>
        </footer>
    )
}