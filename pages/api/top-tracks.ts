// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { getTopTracks } from "../../lib/spotify"

type Data = {
  artist: string
  songUrl: string
  title: string
  name: string
}
type Artist = {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
  artists: Data[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 5).map((track: Artist) => ({
    artist: track.artists[0].name,
    songUrl: track.external_urls.spotify,
    title: track.name,
  }))
  for (const track of tracks) {
    console.log(track)
  }

  res.status(200).json({ tracks })
}
