import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "edge",
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const hasTitle = searchParams.has("title")
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "λ701's Blog"
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            fontFamily: '"Outfit"',
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundImage: "url(http://dev.idhaan.me/og-background.png)",
          }}
        >
          <div
            style={{
              marginLeft: 110,
              marginRight: 190,
              display: "flex",
              fontSize: 100,
              letterSpacing: "-0.05em",
              fontStyle: "bold",
              color: "white",
              lineHeight: "120px",
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1980,
        height: 1080,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
