import Image from "next/image"
import React from "react"

type CardProps = {
  title: string
  artist: string
  imageUrl: string
  album: string
  url: string
  isPlaying: boolean
}

const NowplayingCard = ({
  title,
  artist,
  imageUrl,
  album,
  url,
  isPlaying,
}: CardProps) => {
  return (
    <>
      {isPlaying ? (
        <a
          target={"_blank"}
          href={url}
          className="hover:cursor-pointer stripes stripes-opacity-5 dark:stripes-opacity-95
            border-2 rounded items-center flex gap-2 overflow-hidden
            dark:bg-smoky-black/80 bg-white w-full dark:border-orange-900/50 hover:border-orange-400
            dark:hover:border-orange-800 transition duration-150
            focus:outline-none dark:focus:border-2 dark:focus:border-orange-800 focus:border-2 focus:border-orange-400
            "
        >
          <Image
            className="rounded m-2 aspect-square md:w-48 md:h-48 w-24 h-24 shadow-md object-cover border-2 dark:border-orange-900/50"
            src={imageUrl}
            alt={title}
            width={1080}
            height={1080}
            priority
            placeholder="blur"
            blurDataURL={imageUrl}
          />
          <div className="text-sm  md:text-xl space-y-2 py-2 pr-2">
            <h1 className="font-bold text-ellipsis">{title}</h1>
            <p className="text-slate-500 ">{artist}</p>
            <p className="">{album}</p>
          </div>
          <Image
            className="-rotate-12 scale-75 -z-10 md:scale-150 translate-y-10 translate-x-12 md:-translate-y-8 md:translate-x-12 opacity-10 dark:opacity-80 shadow-3xl absolute right-0"
            src="/icons8-spotify.svg"
            alt="Spotify"
            height={150}
            width={150}
            priority
          />
        </a>
      ) : (
        <div className="border-2 dark:border-none dark:ring-2 dark:ring-orange-900/50 dark:bg-transparent rounded flex gap-2 overflow-hidden bg-white w-full items-center p-4">
          <Image
            className="opacity-10 dark:opacity-80 w-12 h-12"
            src="/icons8-spotify.svg"
            alt="Spotify"
            height={1080}
            width={1080}
          />
          <span>-</span>
          <p className="text-gray-400">Not Playing</p>
        </div>
      )}
    </>
  )
}

export default NowplayingCard
