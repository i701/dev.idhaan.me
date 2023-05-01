import { PlayIcon, LinkIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const ProjectCard = () => {
  return (
    <a
      target={"_blank"}
      href="https://donors.ungoodhoo.live"
      className="space-y-4 transition
        duration-150 w-full p-4 ring-1 hover:bg-neutral-50 dark:focus:bg-neutral-900 ring-gray-300
      hover:ring-gray-400 dark:ring-[#444] bg-white dark:bg-transparent
      dark:hover:bg-neutral-900  dark:hover:ring-[#555] flex flex-col gap-2 rounded
        focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-800
      "
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold dark:text-gray-400">
          MHC Donor Manager
        </h1>
        <LinkIcon className="h-5 w-5" />
      </div>
      <p className="text-neutral-500">
        Web application to manage blood donations both for thalassemia patients
        and other cases.
      </p>
      <br />
      <div className="flex flex-wrap gap-2 text-sm text-orange-500">
        <p>#javascript</p>
        <p>#python</p>
        <p>#html</p>
        <p>#css</p>
      </div>
      {/* <div className="rounded-sm dark:border-2 dark:border-gray-800 border p-2 flex flex-wrap gap-2 justify-around">
        <Image
          className="h-12 w-12"
          src="/icons8-django.svg"
          alt="Django"
          width={500}
          height={500}
        />
        <Image
          className="h-12 w-12"
          src="/icons8-tailwindcss.svg"
          alt="Django"
          width={24}
          height={24}
        />
        <Image
          className="h-12 w-12"
          src="/alpine_long.svg"
          alt="Django"
          width={72}
          height={72}
        />
        <Image
          className="h-12 w-12"
          src="/icons8-amazon-web-services.svg"
          alt="Django"
          width={36}
          height={36}
        />
        <Image
          className="h-12 w-12"
          src="/sending-blue.svg"
          alt="Django"
          width={72}
          height={72}
        />
      </div> */}
    </a>
  )
}

export default ProjectCard
