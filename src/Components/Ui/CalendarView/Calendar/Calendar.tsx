import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "moment/locale/fa";
import { useState } from "react";
import { FiFlag } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { ButtonIcon, ButtonPrimary } from "../../Buttons";
import { useClickAway } from "@uidotdev/usehooks";
import { FlagSelecter, NewTask } from "../../NewTask";

interface event {
  title: string;
  start: string;
  end?: string;
}

interface Props {
  events: event[];
}

const Calendar = ({ events }: Props) => {
  const [newTask, setNewTask] = useState(false);
  const [datepick, setDatepick] = useState(false);
  const [priority, setPriority] = useState(false);
  const handleSelect = (arg: { start: Date; end: Date }) => {
    console.log(arg.start, arg.end);
    setDatepick(true);
  };
  const ref = useClickAway<HTMLDivElement>(() => {
    setDatepick(false);
  });
  return (
    <div className="h-[78vh] overflow-y-auto">
      {newTask && (
        <>
          <div className="fixed flex justify-center items-center top-[-250px] right-[-300px] w-[130vw] h-[130vh] bg-black opacity-30 z-10" />
          <div className="fixed top-[20%] right-[20%] z-20">
            <NewTask
              onClose={() => {
                setNewTask(false);
              }}
            />
          </div>
        </>
      )}
      {datepick && (
        <>
          <div className="fixed flex justify-center items-center top-[-250px] right-[-300px] w-[130vw] h-[130vh] bg-black opacity-30 z-10" />
          <div
            ref={ref}
            className="fixed top-[40%] right-[30%] rounded-xl z-20 w-[500px] bg-white p-5 flex flex-col">
            <div className="flex flex-row-reverse items-center">
              <IoClose
                size="22"
                className="text-gray-primary cursor-pointer duration-300 active:text-red-primary hover:text-red-primary"
                onClick={() => setDatepick(false)}
              />
              <input
                className="border-0 grow text-right mx-2 text-2xl"
                placeholder="نام تسک را وارد کنید"
              />
            </div>
            <div className="flex flex-row-reverse mt-6">
              <div className="relative">
                {priority && (
                  <FlagSelecter
                    onData={() => {
                      setPriority(false);
                    }}
                  />
                )}
                <FiFlag
                  size="25"
                  className="text-gray-300 cursor-pointer"
                  onClick={() => {
                    setPriority(true);
                  }}
                />
              </div>
              <p className="text-2xl text-brand-primary font-bold ml-auto mr-3">
                {" "}
                تیر - ۱۳
              </p>
              <ButtonPrimary
                onClick={() => {
                  setDatepick(false);
                }}>
                تسک جدید
              </ButtonPrimary>
            </div>
          </div>
        </>
      )}
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
          end: "",
          center: "",
          start: "",
        }}
        buttonText={{
          today: "امروز",
        }}
        themeSystem="tailwind"
      />
      <div className=" absolute bottom-[50px] left-[50px] z-10">
        <ButtonIcon
          useCase="newTask"
          onClick={() => {
            setNewTask(true);
          }}></ButtonIcon>
      </div>
    </div>
  );
};

export default Calendar;
