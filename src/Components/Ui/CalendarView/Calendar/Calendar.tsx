import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "moment/locale/fa";

interface event {
  title: string;
  start: string;
  end?: string;
}

interface Props {
  events: event[];
}

const Calendar = ({ events }: Props) => {
  const handleSelect = (arg: { start: Date; end: Date }) => {
    console.log(arg.start, arg.end);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      selectable={true}
      select={handleSelect}
      eventColor="#208D8E"
      events={events}
      locale="fa"
      dayHeaderFormat={{
        weekday: "long",
        omitCommas: true,
      }}
      initialView="dayGridMonth"
      headerToolbar={{
        end: "prev,next,today",
      }}
      buttonText={{
        today: "امروز",
      }}
      themeSystem="tailwind"
    />
  );
};

export default Calendar;
