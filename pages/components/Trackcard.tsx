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
      className="px-2 rounded space-x-2 items-center hover:cursor-pointer hover:stripes stripes-opacity-5
      border-[1px] flex gap-2 overflow-hidden bg-white
      dark:bg-smoky-black/80 dark:border-orange-900/50
      w-full dark:hover:border-orange-800 hover:border-orange-400 transition duration-150
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
      <div className="space-y-2 py-2">
        <h1 className="text-sm md:text-lg font-bold dark:text-white ">
          {title}
        </h1>
        <p className="text-smoky-black/40 dark:text-neutral-500 md:text-base text-xs">
          {artist}
        </p>
      </div>
    </a>
  )
}

export default Trackcard
