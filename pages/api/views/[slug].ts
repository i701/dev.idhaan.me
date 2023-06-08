// /pages/api/views/[slug].js
import kv from "@vercel/kv"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query

  if (!slug) {
    return res.status(400).json({ message: "Invalid slug" })
  }

  let views = await kv.get(`${slug}`)
  if (!views) {
    await kv.set(`${slug}`, "0")
    views = "0"
  }
  await kv.incr(`${slug}`)

  res.status(200).json({ views: (views as number) + 1 })
}
