import Image from "next/image"
import React from "react"

type CardProps = {
  title: string
  artist: string
  url?: string
  index?: number
}

const Trackcard = ({ title, artist, url, index }: CardProps) => {
  return (
    <a
      target={"_blank"}
      href={url}
      className="px-4  space-x-2 items-center hover:cursor-pointer hover:stripes stripes-opacity-5
      border-[1px] flex gap-2 overflow-hidden bg-white
      dark:bg-smoky-black/80 dark:border-orange-900/50
      w-full dark:hover:border-orange-800 hover:border-orange-400 transition duration-150
      focus:outline-none dark:focus:border-2 dark:focus:border-orange-800
      "
    >
      <h1 className="bg-brown-sugar/20 flex justify-center items-center aspect-square w-12 h-12 rounded font-bold text-2xl text-orange-400">
        {index}
      </h1>
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
