import React from "react"
import useSound from "use-sound"
import { PlayIcon, CodeBracketIcon } from "@heroicons/react/24/solid"

const defaultName = "Meme Sound"
type MemesoundProps = {
  name?: string
}

const Memesound = (props: MemesoundProps) => {
  const { name = defaultName } = props
  const [playClick, { stop }] = useSound("/boom.mp3", { volume: 0.4 })
  return (
    <div className="h-24 border">
      <button
        onClick={() => playClick()}
        onMouseLeave={() => stop()}
        className="border focus:bg-orange-200 focus:stripes stripes-reverse stripes-opacity-10 h-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 w-full rounded p-2 hover:bg-gray-200 flex gap-2 justify-center items-center"
      >
        {/* <PlayIcon className="w-8 h-8 text-orange-400" /> */}
        <p className="text-md font-bold">{name}</p>
      </button>
    </div>
  )
}

export default Memesound
