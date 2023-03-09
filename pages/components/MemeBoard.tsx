import useSound from "use-sound"
import Memesound from "./Memesound"

const MemeBoard = () => {
  return (
    <div className="rounded-sm  border-2 border-gray-200">
      <div className="h-12 w-full p-2 bg-orange-300 stripes stripes-opacity-10">
        <h1 className="font-bold text-2xl text-orange-800">Meme Sound Board</h1>
      </div>
      <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-4">
        <Memesound name="vine boom" />
        <Memesound name="oh" />
        <Memesound name="Oh my god" />
        <Memesound name="jordan never did that" />
        <Memesound name="what the hell?" />
        <Memesound />
      </div>
    </div>
  )
}

export default MemeBoard
