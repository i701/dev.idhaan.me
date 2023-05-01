import Link from "next/link"
import { useRouter } from "next/router"
import { BarsArrowDownIcon } from "@heroicons/react/24/solid"
import { Menu } from "@headlessui/react"
import { motion } from "framer-motion"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import ThemeButton from "./ThemeButton"
import { useEffect, useState } from "react"

const space = Space_Grotesk({ subsets: [] })
const links = [
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Listen with me",
    path: "/listen",
  },
  {
    name: "Memes",
    path: "/memes",
  },
  {
    name: "Snippets",
    path: "/snippets",
  },
  {
    name: "About",
    path: "/about",
  },
]

const Navbar = () => {
  const binaryArray: string[] = [
    "01110110",
    "01110010",
    "01100101",
    "00100000",
    "01001110",
    "01110110",
    "01100101",
    "01101001",
    "01110101",
    "00100000",
    "01100111",
    "01101111",
    "01111001",
    "01100101",
    "01110000",
    "00100000",
    "01110101",
    "01110010",
    "01110010",
    "01101110",
    "00100000",
    "01101111",
    "01100001",
    "01110011",
    "00101110",
    "01100101",
    "00100000",
    "01100100",
    "01101101",
    "00100000",
  ]

  function getRandomBinary() {
    return binaryArray[Math.floor(Math.random() * binaryArray.length)]
  }

  const [headingText, setHeadingText] = useState("Welcome 😎")

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomBinary = getRandomBinary()
      setHeadingText(randomBinary)
    }, 2000)
    return () => clearInterval(intervalId)
  })
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const router = useRouter()
  return (
    <nav
      className={`w-full z-50 shadow dark:border-b-2 dark:border-orange-900/50 bg-white dark:bg-black  text-gray-600 dark:text-gray-400 fixed ${space.className}`}
    >
      <div className="flex gap-2 px-6 md:px-6 h-16 max-w-5xl mx-auto items-center justify-between ">
        <Link
          className="text-lg transition duration-150 border-b-2
           dark:hover:border-b-orange-500 hover:border-b-orange-500
           focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 dark:border-gray-700"
          href="/"
        >
          {headingText}
        </Link>
        <div className="flex items-center gap-2">
          <ul
            className={`px-4 md:flex items-center hidden gap-8 ${space.className}`}
          >
            {links.map((link) => (
              <Link
                key={link.path}
                href={`${link.path}`}
                className={`${
                  router.pathname == `${link.path}`
                    ? "text-orange-600 border-b-orange"
                    : ""
                } transition duration-150 text-lg dark:hover:border-b-orange-500
              hover:border-b-orange-500 dark:border-gray-700 border-b-2
                focus:outline-none focus:border-orange-500 dark:focus:border-orange-500
                flex gap-2 items-center tracking-tight`}
              >
                <p>{link.name}</p>
              </Link>
            ))}
          </ul>
          {mounted && <ThemeButton />}

          <div className="relative block md:hidden">
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button className="p-2 transition duration-150 ease-in-out rounded-full focus:ring-2 focus:ring-orange-500 focus:outline-none">
                    <BarsArrowDownIcon className="h-6 w-6 text-slate-500" />
                  </Menu.Button>
                  {open && (
                    <Menu.Items
                      as={motion.div}
                      static
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.15 }}
                      className="bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none rounded dark:bg-gray-900 shadow-md z-50 absolute right-0 flex flex-col"
                    >
                      {links.map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link
                              href={link.path}
                              className={`${
                                active
                                  ? "bg-gray-200 dark:bg-gray-800 text-orange-400"
                                  : ""
                              } text-sm whitespace-no-wrap gap-2 px-5 py-3 w-52 flex items-center justify-between `}
                            >
                              {link.name}
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
      </div>
    </nav>
  )
}

export default Navbar
