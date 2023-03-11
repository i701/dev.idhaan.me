import Link from "next/link"
import { useRouter } from "next/router"
import { BarsArrowDownIcon } from "@heroicons/react/24/solid"
import { Menu } from "@headlessui/react"
import { motion } from "framer-motion"
import useSound from "use-sound"
import { Space_Mono } from "next/font/google"
const space = Space_Mono({ weight: "400", subsets: [] })

const links = [
  {
    name: "Projects",
    path: "/projects",
    sound: "/click.wav",
  },
  {
    name: "Listen with me",
    path: "/listen",
    sound: "/click.wav",
  },
  {
    name: "Memes",
    path: "/memes",
    sound: "/boom.mp3",
  },
  {
    name: "Snippets",
    path: "/snippets",
    sound: "/click.wav",
  },
  {
    name: "Education",
    path: "/education",
    sound: "/click.wav",
  },
]

const Navbar = () => {
  const memeSounds = ["/boom.mp3", "/huh.wav"]
  const randomMemeSound =
    memeSounds[Math.floor(Math.random() * memeSounds.length)]
  const [playClick] = useSound("/click.wav", { volume: 0.4 })
  const [playMeme] = useSound(`${randomMemeSound}`, { volume: 0.2 })
  const router = useRouter()
  return (
    <nav
      className={`w-full z-50 shadow bg-white  text-gray-700 fixed ${space.className}`}
    >
      <div className="flex px-6 md:px-6 h-16 max-w-5xl mx-auto items-center justify-between ">
        <Link className="border-b-2 hover:border-b-orange-500" href="/">
          01101001
        </Link>
        <ul className={`md:flex hidden gap-8 ${space.className}`}>
          {links.map((link) => (
            <Link
              onClick={() => {
                {
                  link.sound == "/click.wav" ? playClick() : playMeme()
                }
              }}
              onMouseLeave={() => {
                stop()
              }}
              key={link.path}
              href={`${link.path}`}
              className={`${
                router.pathname == `${link.path}`
                  ? "text-orange-600 border-b-orange"
                  : ""
              } transition duration-150 text-lg hover:border-b-orange-500 border-b-2 flex gap-2 items-center tracking-tight`}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </ul>
        <div className="relative block md:hidden">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="p-2 transition duration-150 ease-in-out rounded-full hover:bg-gray-200">
                  <BarsArrowDownIcon className="h-6 w-6 text-gray-500" />
                </Menu.Button>
                {open && (
                  <Menu.Items
                    as={motion.div}
                    static
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className="bg-white border shadow-md z-50 absolute right-0 flex flex-col"
                  >
                    {links.map((link) => (
                      <Menu.Item key={link.path}>
                        {({ active }) => (
                          <Link
                            onClick={() => {
                              {
                                link.sound == "/click.wav"
                                  ? playClick()
                                  : playMeme()
                              }
                            }}
                            onMouseLeave={() => {
                              stop()
                            }}
                            href={link.path}
                            className={`${
                              active ? "bg-gray-200" : ""
                            } whitespace-no-wrap gap-2 px-5 py-3 w-52 flex items-center justify-between `}
                          >
                            {link.name}
                            {/* <CodeBracketIcon className="h-5 w-5 text-gray-500" /> */}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                )}
              </>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
