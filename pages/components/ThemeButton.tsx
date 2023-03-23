import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import useSound from "use-sound"

const ThemeButton = () => {
  const soundUrl = "/switch.wav"
  const [play, { stop }] = useSound(soundUrl, { volume: 0.4 })
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
      onClick={() => {
        play()
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-5 w-5 text-orange-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-800" />
      )}
    </button>
  )
}

export default ThemeButton
