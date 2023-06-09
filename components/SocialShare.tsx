import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share"
import { SocialIcon } from "react-social-icons"
import React from "react"

export default function SocialShare({ full_url }: { full_url: string }) {
  return (
    <div className="flex flex-col justify-center items-center my-4 py-4">
      {/* <p className="text-xs text-orange-900">share this article</p> */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <FacebookShareButton url={full_url}>
          <div className="border dark:border-gray-700 text-sm rounded gap-2 flex items-center justify-between p-2">
            <span>Share</span>
            <SocialIcon style={{ height: 20, width: 20 }} network="facebook" />
          </div>
        </FacebookShareButton>
        <TelegramShareButton url={full_url}>
          <div className="border dark:border-gray-700 text-sm rounded gap-2 flex items-center justify-between p-2">
            <span>Send</span>
            <SocialIcon style={{ height: 20, width: 20 }} network="telegram" />
          </div>
        </TelegramShareButton>
        <TwitterShareButton url={full_url}>
          <div className="border dark:border-gray-700 text-sm rounded gap-2 flex items-center justify-between p-2">
            <span>Tweet</span>
            <SocialIcon style={{ height: 20, width: 20 }} network="twitter" />
          </div>
        </TwitterShareButton>
        <WhatsappShareButton url={full_url}>
          <div className="border dark:border-gray-700 text-sm rounded gap-2 flex items-center justify-between p-2">
            <span>Send</span>
            <SocialIcon style={{ height: 20, width: 20 }} network="whatsapp" />
          </div>
        </WhatsappShareButton>
      </div>
    </div>
  )
}
