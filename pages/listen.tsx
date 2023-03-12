import useSWR from "swr"
import NowplayingCard from "./components/NowplayingCard"
import { Suspense } from "react"
import Trackcard from "./components/Trackcard"
import Head from "next/head"

type SongProps = {
  album: string
  albumImageUrl: string
  artist: string
  title: string
  songUrl: string
  isPlaying: boolean
}

type TrackType = {
  index?: number
  songUrl: string
  artist: string
  title: string
}

type TracksType = {
  tracks: TrackType[]
}

const Listen = () => {
  const { data: song, error, isLoading } = useSWR<SongProps>("/api/now-playing")

  const { data: songs } = useSWR<TracksType>("/api/top-tracks")
  const tracks = songs?.tracks

  if (error) return <div>Oh balls. My server fucked up lmao. Try again?</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Listen with me</title>
      </Head>
      <div className={`space-y-4`}>
        <h1 className="text-4xl font-bold text-orange-600">
          <span className="accent-line ">Listen </span>
          with me
        </h1>
        <p>Listen along with me 🎶</p>
        {song && (
          <NowplayingCard
            album={song.album}
            artist={song.artist}
            imageUrl={song.albumImageUrl}
            title={song.title}
            url={song.songUrl}
            isPlaying={song.isPlaying}
          />
        )}
        <br />
        <h1 className="font-bold border-b-2 border-orange-500 pb-2 text-xl">
          My Top 5 Tracks
        </h1>
        {tracks ? (
          <p className="text-sm md:text-base">
            <span className="font-bold">{tracks[0].title}</span>[by{" "}
            {tracks[0].artist}] is the most streamed song of mine as of now.
            Here's my top tracks on Spotify.
          </p>
        ) : (
          ""
        )}
        <div className="gap-1 flex flex-col">
          {tracks?.map((s: TrackType, index: number) => (
            <Trackcard
              key={s.title}
              artist={s.artist}
              title={s.title}
              url={s.songUrl}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Listen
