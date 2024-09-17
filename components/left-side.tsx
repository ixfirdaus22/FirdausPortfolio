import { siteConfig } from "@/config/site-config";
import { Linkedin, Mail, MapPin, Paperclip } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";

const LeftSide = () => {
    return <div className="flex-1 w-full xl:h-full xl:max-w-md xl:p-8 pt-8 px-8">
    <div className="flex flex-col w-full h-full space-y-6 rounded-md">
      {/*Avatar*/}
        <Image alt="avatar" src="/image-modified.png" width="120" height="120" priority loading="eager" />
      {/*content container*/}
      <div>
        {/*Title*/}
      <div className="text-xl font-semibold text-primary">{siteConfig.title}</div>
      {/* Full Name */}
      <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
      {/*Bio*/}
      <p className="text-2xl font-light text-neutral-500">{siteConfig.bio}</p>
      </div>
      {/*Buttons containers*/}
      <div className="flex items-center justify-between gap-6 text-sm">
        <a className="px-3 py-2 border rounded-md flex items-center w-full gap-2 border-neutral-200 dark:border-neutral-800" href={`mailto:${siteConfig.email}`}>
          <Mail size="16" />
          Contact Me</a>
        <a className="px-3 py-2 border rounded-md flex items-center w-full gap-2 border-neutral-200 dark:border-neutral-800" href={siteConfig.resume}>
          <Paperclip size="16" />
          Resume</a>
      </div>
      <p className="text-l font-light flex items-center">
        <MapPin size="16" className="mr-2" />
        {siteConfig.location}
      </p>
      {/*footer*/}
      <div className="hidden xl:flex">
      <Footer />
      </div>
    </div>
  </div>
};

export default LeftSide;