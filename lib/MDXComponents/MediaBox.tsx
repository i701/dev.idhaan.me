import Image from "next/image"
import { IMediaBox } from "../types"

const MediaBox = ({ caption, mediaSrc, type = "IMAGE" }: IMediaBox) => {
  return (
    <div
      className={`w-full mx-auto ${
        type === "GIF"
          ? ""
          : "dark:border-gray-600/10 pb-4 border-b-2 border-gray-300/10"
      } flex items-center justify-center flex-col gap-2 `}
    >
      <div className="text-center flex flex-col items-center space-y-4 rounded py-4">
        {type === "IMAGE" && (
          <Image
            className="rounded shadow-md h-full w-72 md:w-[22rem]"
            alt={caption || "lmao"}
            src={mediaSrc || ""}
            width={1080}
            height={1920}
          />
        )}
        {type === "GIF" && (
          <Image
            className="rounded shadow-md h-full w-72 md:w-[22rem]"
            alt={caption || "lmao"}
            src={mediaSrc || ""}
            width={1080}
            height={1920}
          />
        )}
        {type === "VIDEO" && (
          <video
            className="rounded shadow-md h-full w-72 md:w-[22rem]"
            autoPlay
            loop
            muted
          >
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
