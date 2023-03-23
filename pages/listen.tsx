import useSWR from "swr"
import NowplayingCard from "../components/NowplayingCard"
import Trackcard from "../components/Trackcard"
import Head from "next/head"
import Loading from "../components/Loading"

interface IRecentyPlayedItems {
  tracks: Track[]
}
interface Track {
  artist: string
  songUrl: string
  title: string
  albumUrl: AlbumURL
}

interface AlbumURL {
  height: number
  url: string
  width: number
}

interface INowPlayingItem {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

const Listen = () => {
  const {
    data: song,
    error,
    isLoading,
  } = useSWR<INowPlayingItem>("/api/now-playing")

  const { data: songs } = useSWR<IRecentyPlayedItems>("/api/recently-played")
  const tracks = songs?.tracks || []

  for (let i = 0; i < tracks.length; i++) {
    for (let j = i + 1; j < tracks.length; j++) {
      if (JSON.stringify(tracks[i]) === JSON.stringify(tracks[j])) {
        tracks?.splice(j, 1)
        j--
      }
    }
  }

  if (error) return <div>Oh balls. What did my server do?. Try Again?</div>
  if (isLoading) return <Loading />

  return (
    <>
      <Head>
        <title>Listen with me</title>
        <meta
          property="og:image"
          content={`https://dev.idhaan.me/api/og?title=Listen+with+me`}
        />
      </Head>
      <div className={`space-y-4`}>
        <h1 className="text-2xl md:text-4xl font-bold text-orange-600">
          <span className="accent-line ">Listen </span>
          with me
        </h1>
        <p className="dark:text-gray-400 md:text-base text-sm">
          Listen along with me 🎶
        </p>
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
        <h1 className="font-bold border-b-2 border-orange-500 pb-2 text-xl dark:text-white">
          My Recently Played Tracks
        </h1>
        {tracks ? (
          <p className="text-sm md:text-base dark:text-gray-400">
            Here are my recently streamed tracks on Spotify.
          </p>
        ) : (
          ""
        )}
        <div className="gap-2 flex flex-col">
          {tracks?.map((s: Track, index: number) => (
            <Trackcard
              key={s.title}
              artist={s.artist}
              title={s.title}
              url={s.songUrl}
              index={index + 1}
              albumArt={s.albumUrl.url}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Listen
