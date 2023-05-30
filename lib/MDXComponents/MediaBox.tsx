import Image from "next/image"
import { IMediaBox } from "../types"

const MediaBox = ({ caption, mediaSrc, type = "IMAGE" }: IMediaBox) => {
  return (
    <div
      className={`rounded w-full ${
        type === "GIF"
          ? ""
          : "dark:bg-persian-orange/20 bg-persian-orange/20 dark:border-gray-600 pb-4"
      } flex items-center justify-center flex-col gap-2 `}
    >
      <div className="text-center flex flex-col items-center space-y-4 rounded p-4">
        {type === "IMAGE" && (
          <Image
            className="shadow-md"
            alt={caption}
            src={mediaSrc}
            width={1080}
            height={1920}
          />
        )}
        {type === "GIF" && (
          <Image
            className="shadow-md"
            alt={caption}
            src={mediaSrc}
            width={1080}
            height={1920}
          />
        )}
        {type === "VIDEO" && (
          <video className="rounded shadow-md" autoPlay loop muted>
            <source src={mediaSrc} type="video/mp4" />
          </video>
        )}
        {mediaSrc && (
          <figcaption className="tracking-normal leading-6 md:leading-8 md:tracking-wide md:text-base">
            {caption}
          </figcaption>
        )}
      </div>
    </div>
  )
}

export default MediaBox
