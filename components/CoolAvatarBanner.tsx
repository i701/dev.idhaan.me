import { AVATAR_BASE64 } from "@/lib/constants"
import Image from "next/image"
import React from "react"

interface IAvatarBanner {}

const CoolAvatarBanner: React.FC<IAvatarBanner> = () => {
  return (
    <div className="ring-2 p-2 dark:bg-orange-500/20 bg-orange-200 pr-4 flex gap-4 mt-4 rounded-full items-center ring-orange-500/50">
      <Image
        src="/avatar.jpg"
        alt="Profile photo of me"
        blurDataURL={AVATAR_BASE64}
        placeholder="blur"
        width={640}
        height={640}
        className="rounded-full h-12 w-12 md:w-12 md:h-12 ring-2 ring-orange-500/50"
      />
      <div className="text-sm text-left">
        <h4 className="font-bold">Abdulla Aidhaan</h4>
        <p>Telegram Enthusiast</p>
      </div>
    </div>
  )
}

export default CoolAvatarBanner
