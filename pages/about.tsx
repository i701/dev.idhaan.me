import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import TimelineEvent from "./components/TimelineEvent"
import { TimelineProps } from "./components/TimelineEvent"

let _educations: TimelineProps[] = [
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
    educatedPlaceName: "Maldives National University",
    educatedPlaceLink: "https://mnu.edu.mv/",
    location: "Maldives National University, Male', Rep of Maldives",
    eventSummary:
      "This is the first diploma i completed after i decided to major in IT.",
  },

  {
    id: 3,
    date: "2019 - 2020",
    educationName: "Diploma in Information Technology (Virtual)",
    educatedPlaceName: "Maldives Business School",
    educatedPlaceLink: "https://businessschool.mv/",
    location: "Maldives Business School, Male', Rep of Maldives",
    eventSummary:
      "This is the second diploma i completed after i completed my first diploma in MNU.",
  },
  {
    id: 4,
    date: "2020 - 2021",
    educationName: "Associate Degree in Information Technology (Virtual)",
    educatedPlaceName: "Maldives Business School",
    educatedPlaceLink: "https://businessschool.mv/",
    location: "Maldives Business School, Male', Rep of Maldives",
    eventSummary: "This is the first associate degree i completed.",
  },
  {
    id: 5,
    date: "2022 - 2023",
    educationName: "Bachelor's Degree in Information Technology (Virtual)",
    educatedPlaceName: "Maldives Business School",
    educatedPlaceLink: "https://businessschool.mv/",
    location: "Maldives Business School, Male', Rep of Maldives",
    eventSummary:
      "This was it. This was the milestone i chased for long 3 years!. i did it! i FINALLY did it! i have a bachelor's degree in IT.",
  },
]

const educations = _educations.reverse()

const About = () => {
  const factArray = [
    "a Web Developer 🖥️",
    "a Defender (Football) ⚽",
    "an Admin Officer 👨🏽‍💼",
    "a Telegram Addict ✨",
    "a Python Enthusiast 🐍",
  ]

  function getRandomFact() {
    return factArray[Math.floor(Math.random() * factArray.length)]
  }

  const [fact, setFact] = useState("a Geek 🤓")

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomFact = getRandomFact()
      setFact(randomFact)
    }, 4000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className={`space-y-4`}>
        <h1 className="text-2xl md:text-4xl font-bold text-orange-600">
          <span className="accent-line">About</span>
        </h1>
        <div className="rounded dark:border-orange-800 hover:border-orange-500 transition duration-150 border-2 w-full flex flex-col space-y-4 pt-4 md:pb-6 items-center justify-center">
          <h3 className="font-bold text-xl md:text-2xl ">
            Hello, My Name is Aidhaan
          </h3>
          <div className="text-base md:text-xl flex items-center gap-2">
            <p className="">I am</p>
            <span className="font-bold text-orange-600">{fact}</span>
          </div>

          <Image
            src="/avatar.jpg"
            alt="Profile photo of me"
            blurDataURL="/avatar.jpg"
            placeholder="blur"
            width={640}
            height={640}
            className="rounded-full h-40 w-40 md:w-48 md:h-48 ring-2 ring-orange-500"
          />
          <div className="md:text-base text-orange-500 bg-persian-orange/20 rounded-sm p-2 max-w-sm text-sm">
            <p className="dark:text-orange-500 text-gray-600">
              everyday i am convinced to start over a whole perfectly working
              project in a new javascript framework 🤡
            </p>
          </div>
        </div>

        <p className="dark:text-gray-400 md:text-base text-sm pt-4">
          Here is a peek into the history of my education timeline.
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

export default About
