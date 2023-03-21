// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Item } from "@/lib/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { getRecentTracks } from "../../lib/spotify"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getRecentTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 5).map((t: Item) => ({
    artist: t.track.artists[0].name,
    songUrl: t.track.external_urls.spotify,
    title: t.track.name,
    albumUrl: t.track.album.images[1],
  }))

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  )

  res.status(200).json({ tracks })
}
