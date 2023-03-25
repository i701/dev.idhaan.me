import { IDua } from "@/lib/types"
import { Noto_Naskh_Arabic, Space_Mono } from "next/font/google"

const nashk = Noto_Naskh_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const Dua = ({ dua, pronounciation, meaning }: IDua) => {
  return (
    <div
      className={`bg-gray-50 transition duration-150 w-full px-4 pb-6 pt-0 ring-1 hover:bg-neutral-50 dark:focus:bg-neutral-900 ring-gray-300 hover:ring-gray-400 dark:ring-[#444] dark:bg-transparent dark:hover:bg-neutral-900  dark:hover:ring-[#555] flex flex-col gap-2 rounded`}
    >
      <div className="rtl text-center space-y-4">
        <p
          className={`${nashk.className} md:text-2xl text-xl font-medium text-slate-700 dark:text-gray-300 group-hover:text-slate-900`}
        >
          {dua}
        </p>
        <p className="font-medium text-neutral-500 group-hover:text-slate-700">
          {pronounciation}
        </p>
        <p className="tracking-normal md:tracking-wide md:text-base">
          {meaning}
        </p>
      </div>
    </div>
  )
}

export default Dua
