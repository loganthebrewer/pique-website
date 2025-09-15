import Typography from "@/components/Typography";
import EventCard from "@/components/EventCard";

export default function EventsSection() {
    return (
      <section id="events" className="bg-neutral-1000 p-7 md:p-20">
          <Typography variant="h1">Events</Typography>
          <Typography variant="h2">Pique your Poison...</Typography>
          <div className="flex flex-col items-center my-3">
              <EventCard/>
          </div>
      </section>
    )
}