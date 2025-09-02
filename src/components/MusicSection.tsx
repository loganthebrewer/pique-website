import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/Typography";

export type ReleaseProps = {
    src: string;
    caption: string;
    alt?: string;
    href?: string | URL;    // when provided, image + caption become a single link
    width?: number;
    height?: number;
    className?: string;     // optional extra classes for the wrapper
    imgClassName?: string;  // optional extra classes for the image
};

function Release({
    src,
    caption,
    alt,
    href,
    width = 200,
    height = 200,
    className = "",
    imgClassName = "",
}: ReleaseProps) {
    const content = (
        <>
            <Image
                className={`max-sm:w-50 w-100 aspect-square ${imgClassName}`}
                src={src}
                alt={alt ?? caption}
                width={width}
                height={height}
            />
            <Typography variant="small">
                <strong>{caption}</strong>
            </Typography>
        </>
    );

    return href ? (
        <Link href={href} className={`flex flex-col items-center ${className}`}>
            {content}
        </Link>
    ) : (
        <div className={`flex flex-col items-center ${className}`}>{content}</div>
    );
}

export default function MusicSection() {
    return (
        <section id="music" className="flex flex-col bg-neutral-900 p-5 md:p-20">
            <Typography variant="h1">Music</Typography>
            <div className="m-5 grid max-sm:grid-rows-3 md:grid-cols-3 gap-1 md:gap-40 place-self-center justify-center">
                <Release src="/images/phantasmagoria.jpg" href="https://piquetx.bandcamp.com/album/phantasmagoria" caption="Phantasmagoria (EP)" alt="Cover for our EP, Phantasmagoria" />
                <Release src="/images/overtones.jpg" href="https://piquetx.bandcamp.com/track/overtones" caption="Overtones (Single)" alt="Cover for our single, Overtones" />
                <Release src="/images/terra-firma.jpg" href="https://piquetx.bandcamp.com/track/terra-firma" caption="Terra Firma (Single)" alt="Cover for our EP, Terra Firma" />
            </div>

        </section>
    )
}