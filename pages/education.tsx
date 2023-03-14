import Head from "next/head"
import TimelineEvent from "./components/TimelineEvent"

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
          <TimelineEvent />
          <TimelineEvent />
        </div>
      </div>
    </>
  )
}

export default Education
