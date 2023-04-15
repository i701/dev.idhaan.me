import React from "react"

const Loading = () => {
  return (
    <div className="bg-gray-50 dark:bg-orange-900/40 shadow rounded stripes stripes-opacity-10 dark:stripes-opacity-80 p-2 flex gap-2">
      <p className="">Loading</p>
      <span className="animate-pulse">...</span>
    </div>
  )
}

export default Loading
