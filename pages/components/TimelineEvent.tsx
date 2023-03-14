import {
  CalendarIcon,
  AcademicCapIcon,
  MapPinIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid"

export interface TimelineProps {
  id?: number
  date: string
  educationName: string
  educatedPlaceName: string
  educatedPlaceLink: string
  location: string
  eventSummary: string
}

const TimelineEvent = ({
  date,
  educationName,
  educatedPlaceName,
  educatedPlaceLink,
  location,
  eventSummary,
}: TimelineProps) => {
  return (
    <div className="relative hover:border-orange-500 dark:hover:border-gray-400 border-l-4 border-gray-700/20 py-8 transition duration-150">
      <div className="linedot"></div>
      <div className="pl-10 space-y-2 md:space-y-4">
        <div className=" flex gap-2 items-center pb-4">
          <CalendarIcon className="h-5 w-5 text-gray-600" />
          <p className="text-xs md:text-base tracking-widest font-bold dark:text-orange-500">
            {date}
          </p>
        </div>
        <div className=" flex gap-2 items-center">
          <AcademicCapIcon className="aspect-square text-gray-400 linedot bg-white dark:text-gray-600 dark:bg-black" />
          <h3 className="md:text-xl text-sm text-gray-600 font-semibold">
            {educationName}
          </h3>
        </div>
        <div className=" flex gap-2 items-center">
          <BuildingOfficeIcon className="aspect-square text-gray-400 linedot bg-white dark:text-gray-600 dark:bg-black" />
          <h3 className="md:text-xl text-sm text-gray-600">
            {educatedPlaceName}
          </h3>
        </div>
        <div className=" flex gap-2 items-center">
          <MapPinIcon className="aspect-square text-gray-400 linedot bg-white dark:text-gray-600 dark:bg-black" />
          <a
            target={"_blank"}
            href={educatedPlaceLink}
            className="md:text-xl text-xs text-gray-600 hover:text-orange-600"
          >
            {location}
          </a>
        </div>
        <p className="text-xs md:text-base">{eventSummary}</p>
      </div>
    </div>
  )
}

export default TimelineEvent
