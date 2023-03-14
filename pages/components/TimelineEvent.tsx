import React from "react"

const TimelineEvent = () => {
  return (
    <div className="relative hover:border-orange-500 dark:hover:border-gray-400 border-l-4 border-gray-700/20 py-8 transition duration-150">
      <div className="linedot"></div>
      <div className="pl-10 space-y-2">
        <span className="text-xs md:text-base tracking-widest font-bold dark:text-orange-500 ">
          16 Nov 2021
        </span>
        <h3 className="md:text-3xl text-gray-600 font-semibold">
          Diploma of Information Technlology
        </h3>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          dolor quidem rerum amet aliquid enim inventore nostrum expedita
          eveniet? Nihil impedit blanditiis officiis exercitationem.
        </p>
      </div>
    </div>
  )
}

export default TimelineEvent
