import Image from "next/image"
import React from "react"

type CardProps = {
  title: string
  artist: string
  url?: string
  index?: number
  albumArt: string
}

const Trackcard = ({ title, artist, url, index, albumArt }: CardProps) => {
  return (
    <a
      target={"_blank"}
      href={url}
      className="p-2 hover:cursor-pointer hover:stripes stripes-opacity-5 dark:stripes-opacity-95
      border-2 rounded items-center flex gap-2 overflow-hidden
      dark:bg-transparent bg-white w-full dark:border-orange-900/50 hover:border-orange-400
      dark:hover:border-orange-800 transition duration-150
      focus:outline-none dark:focus:border-2 dark:focus:border-orange-800 focus:border-2 focus:border-orange-400
      "
    >
      {/* <h1 className="flex justify-center items-center aspect-square w-12 h-12 rounded font-bold text-xl text-orange-500">
        #{index}
      </h1> */}
      <Image
        className="h-16 rounded w-16 aspect-square"
        src={albumArt}
        width="300"
        height="300"
        alt={title}
      />
      <div className="space-y-2">
        <h1 className="text-sm md:text-lg font-bold dark:text-white ">
          {title}
        </h1>
        <p className="text-gray-500 dark:text-neutral-500 md:text-base text-xs">
          {artist}
        </p>
      </div>
    </a>
  )
}

export default Trackcard
