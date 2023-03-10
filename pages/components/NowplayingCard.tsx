import Image from "next/image"
import React from "react"

type CardProps = {
  title: string
  artist: string
  imageUrl: string
  album: string
  url: string
}

const NowplayingCard = ({ title, artist, imageUrl, album, url }: CardProps) => {
  return (
    <a
      target={"_blank"}
      href={url}
      className="hover:cursor-pointer hover:stripes stripes-opacity-5 border-2 rounded flex gap-2 overflow-hidden bg-white md:w-1/2 hover:border-orange-400 transition duration-150"
    >
      <Image
        className="rounded m-2 shadow-md"
        src={imageUrl}
        alt={title}
        width={150}
        height={150}
      />
      <div className="space-y-2 py-2">
        <h1 className="text-xl font-bold ">{title}</h1>
        <p className="text-gray-500">{artist}</p>
        <p>{album}</p>
      </div>
    </a>
  )
}

export default NowplayingCard
