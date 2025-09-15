import Typography from "@/components/Typography";

export default function EventCard() {
    return(
        <div className="border-red-400 border w-full bg-neutral-900 rounded-3xl p-5">
            <Typography variant={"small"} className="text-red-400">October 9th, 2025</Typography>
            <Typography variant={"h3"}>Rubber Gloves | Denton, TX</Typography>
        </div>
    )
}