import Image from "next/image"
import { IMediaBox } from "../types"
import { useEffect, useRef, useState } from "react"
import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid"
import { GEN_BASE64_URL } from "../constants"

const MediaBox = ({ caption, mediaSrc, type = "IMAGE", poster }: IMediaBox) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPaused, setIsPaused] = useState(true)
  const [showControls, setShowControls] = useState(true)

  const playPauseVideo = () => {
    if (videoRef.current) {
      if (isPaused) {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // The video is playing
              setIsPaused(false)
              setTimeout(() => setShowControls(false), 100)
            })
            .catch((error) => {
              // Handle the error
              // what is the point of showing the same error but not in red color?
              // console.log(error)
            })
        }
      } else {
        // If the video is playing, pause it
        if (videoRef.current) {
          videoRef.current.pause()
          setIsPaused(true)
        }
      }
    }
  }

  useEffect(() => {
    const videoElement = videoRef?.current

    const onPlay = () => setIsPaused(false)
    const onPause = () => setIsPaused(true)
    if (videoElement) {
      videoElement.addEventListener("play", onPlay)
      videoElement.addEventListener("pause", () => onPause)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0] is the video element
        if (!entries[0].isIntersecting && !isPaused) {
          videoElement?.pause()
          setIsPaused(true)
        }
      },
      {
        threshold: 0.5, // Pause the video when less than 50% of it is visible
      }
    )

    if (videoElement) {
      observer.observe(videoElement)
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", onPlay)
        videoElement.removeEventListener("pause", onPause)
        observer.unobserve(videoElement)
      }
    }
  }, [isPaused])

  return (
    <div
      className={`w-full mx-auto ${
        type === "GIF"
          ? ""
          : "dark:border-gray-600/10 pb-4 border-b-2 border-gray-300/10"
      } flex items-center justify-center flex-col gap-2 `}
    >
      <div
        className="text-center flex flex-col items-center space-y-4 rounded py-4"
        // Assuming the controls should show when the video is touched
      >
        {type === "IMAGE" && (
          <Image
            className="rounded shadow-md h-full w-72 md:w-[22rem]"
            alt={caption || "lmao"}
            src={mediaSrc || ""}
            width={1080}
            height={1920}
            placeholder="blur"
            loading="lazy"
            blurDataURL={GEN_BASE64_URL}
          />
        )}
        {type === "GIF" && (
          <Image
            className="rounded shadow-md h-full w-72 md:w-[22rem]"
            alt={caption || "lmao"}
            src={mediaSrc || ""}
            width={1080}
            height={1920}
            loading="lazy"
          />
        )}
        {type === "VIDEO" && (
          <div
            className="flex flex-col items-center justify-center relative rounded shadow-md h-full w-72 md:w-[22rem]"
            onClick={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onTouchStart={() => setShowControls(true)}
          >
            <video
              poster={poster}
              ref={videoRef}
              className="rounded shadow-xl"
              preload="none"
            >
              <source src={mediaSrc} />
            </video>

            {(showControls || isPaused) && (
              <div className="absolute rounded bg-black/50 h-full w-full flex items-center justify-center">
                <button
                  // className="absolute rounded bg-black/50 h-full w-full flex items-center justify-center"
                  onClick={playPauseVideo}
                >
                  {isPaused ? (
                    <PlayCircleIcon className={`w-14 h-14 text-white`} />
                  ) : (
                    <PauseCircleIcon className="w-14 h-14 text-white" />
                  )}
                </button>
              </div>
            )}
            {/* <pre>{JSON.stringify({ isPaused, showControls })}</pre> */}
          </div>
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
