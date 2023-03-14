import Head from "next/head"
import TimelineEvent from "./components/TimelineEvent"
import { TimelineProps } from "./components/TimelineEvent"

const educations: TimelineProps[] = [
  {
    id: 1,
    date: "2004 - 2013",
    educationName: "Primary / Secondary School / GCE O'level",
    educatedPlaceName: "Sh.Maaugoodhoo School",
    educatedPlaceLink:
      "https://www.facebook.com/Sh.MaaungoodhooSchool?mibextid=LQQJ4d",
    location: "Sh.Maaungoodhoo School, Sh.Maaungoodhoo, Rep of Maldives",
    eventSummary:
      "i don't remember when was my pre-school days but this was the earliest i can remember with the year.",
  },
  {
    id: 2,
    date: "2014 - 2016",
    educationName: "Diploma in Information Technology",
    educatedPlaceName: "Maldives National University:",
    educatedPlaceLink: "https://mnu.edu.mv/",
    location: "Maldives National University, Male', Rep of Maldives",
    eventSummary:
      "This is the first diploma i completed after i decided to major in IT.",
  },
]

const Education = () => {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <div className={`space-y-4`}>
        <h1 className="text-2xl md:text-4xl font-bold text-orange-600">
          <span className="accent-line ">Education</span>
        </h1>
        <p className="dark:text-gray-400 md:text-base text-sm">
          Peek into the history of my education timeline.
        </p>
        <div className="timeline">
          {educations.map((education) => (
            <TimelineEvent
              key={education.id}
              date={education.date}
              educatedPlaceName={education.educatedPlaceName}
              educatedPlaceLink={education.educatedPlaceLink}
              educationName={education.educationName}
              location={education.location}
              eventSummary={education.eventSummary}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Education
