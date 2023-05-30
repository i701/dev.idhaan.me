import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "next-share"
import { SocialIcon } from "react-social-icons"
import { Space_Grotesk } from "next/font/google"
import React from "react"
const spacegrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export default function SocialShare({ full_url }: { full_url: string }) {
  return (
    <div
      className={`${spacegrotesk.className} flex flex-col justify-center items-center border-t-2 border-orange-500/50 my-4 py-4`}
    >
      {/* <p className="text-xs text-orange-900">share this article</p> */}
      <div className="flex gap-4 items-center justify-center">
        <FacebookShareButton url={full_url}>
          <SocialIcon
            bgColor="transparent"
            fgColor="#f97316"
            style={{ height: 35, width: 35 }}
            network="facebook"
            className="w-5 h-5"
          />
        </FacebookShareButton>
        <TelegramShareButton url={full_url}>
          <SocialIcon
            bgColor="transparent"
            fgColor="#f97316"
            style={{ height: 35, width: 35 }}
            network="telegram"
          />
        </TelegramShareButton>
        <TwitterShareButton url={full_url}>
          <SocialIcon
            bgColor="transparent"
            fgColor="#f97316"
            style={{ height: 35, width: 35 }}
            network="twitter"
          />
        </TwitterShareButton>
        <RedditShareButton url={full_url}>
          <SocialIcon
            bgColor="transparent"
            fgColor="#f97316"
            style={{ height: 35, width: 35 }}
            network="reddit"
          />
        </RedditShareButton>
      </div>
    </div>
  )
}
