import { PlayIcon, LinkIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const ProjectCard = () => {
  return (
    <div className="space-y-2 bg-white hover:ring-2 hover:ring-offset-2 max-w-md border focus:ring-2 hover:ring-orange-400 focus:ring-offset-2 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Ungoodhoo Donors</h1>
        <a target={"_blank"} href="https://donors.ungoodhoo.live">
          <LinkIcon className="h-5 w-5" />
        </a>
      </div>
      <p>
        Web application to manage blood donations both for thalassemia patients
        and other cases.
      </p>
      <br />
      <div className="flex flex-wrap gap-2 text-sm text-gray-400">
        <p>#javascript</p>
        <p>#python</p>
        <p>#html</p>
        <p>#css</p>
      </div>
      <hr />
      <div className="bg-drab-brow/5 rounded-sm border p-2 flex flex-wrap gap-2 justify-around">
        <Image
          className=""
          src="/icons8-django.svg"
          alt="Django"
          width={48}
          height={48}
        />
        <Image
          className=""
          src="/icons8-tailwindcss.svg"
          alt="Django"
          width={24}
          height={24}
        />
        <Image
          className=""
          src="/alpine_long.svg"
          alt="Django"
          width={72}
          height={72}
        />
        <Image
          className=""
          src="/icons8-amazon-web-services.svg"
          alt="Django"
          width={36}
          height={36}
        />
        <Image
          className=""
          src="/sending-blue.svg"
          alt="Django"
          width={72}
          height={72}
        />
      </div>
    </div>
  )
}

export default ProjectCard
