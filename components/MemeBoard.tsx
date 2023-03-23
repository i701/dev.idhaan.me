import useSound from "use-sound"
import Memesound from "./Memesound"

const MemeBoard = () => {
  const soundUrl = "/memes.mp3"

  const [play, { stop }] = useSound(soundUrl, {
    sprite: {
      ooh: [225, 600],
      windowsError: [900, 1000],
      wow: [15600, 4000],
      bruh: [19700, 720],
      doIt: [135500, 720],
      noGodPleaseNo: [98000, 4000],
      sus: [132400, 3000],
      nani: [143200, 1000],
    },
    volume: 4,
  })

  const memeIds = [
    {
      id: 1,
      name: "ooh",
      displayName: "Minecraft Damage",
    },
    {
      id: 2,
      name: "windowsError",
      displayName: "Windows Error",
    },
    {
      id: 3,
      name: "wow",
      displayName: "Anime Wow",
    },
    {
      id: 4,
      name: "bruh",
      displayName: "bruh",
    },
    {
      id: 5,
      name: "doIt",
      displayName: "Just Do it!",
    },
    {
      id: 6,
      name: "noGodPleaseNo",
      displayName: "Michael's epic rejection!",
    },
    {
      id: 7,
      name: "sus",
      displayName: "Amosus",
    },
    {
      id: 8,
      name: "nani",
      displayName: "Nani?!",
    },
  ]
  return (
    <div className="rounded bg-white dark:bg-transparent shadow dark:ring-2 ring-orange-800">
      <div className="h-12 w-full p-2 dark:bg-orange-800/50 bg-orange-400 stripes stripes-opacity-10">
        <h1 className="font-bold text-2xl text-orange-800 dark:text-orange-400">
          Meme Sound Board
        </h1>
      </div>
      <div className="dark:border-t-2 border-orange-800 p-4 grid gap-4 grid-cols-2 md:grid-cols-4">
        {memeIds.map((meme) => (
          <Memesound
            key={meme.id}
            onMouseLeave={() => stop()}
            onClick={() => play({ id: meme.name })}
          >
            <p>{meme.displayName}</p>
          </Memesound>
        ))}
      </div>
    </div>
  )
}

export default MemeBoard
