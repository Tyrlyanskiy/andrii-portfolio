"use client";

import { FiDownload } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import Social from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const CV_PUBLIC_URL = process.env.CV_PUBLIC_URL || "";

  const downloadFileAtUrl = async (url: string) => {
    if (!url) return;

    const fileName = url.split("/").pop();
    if (!fileName) return;

    const proxyUrl = `/api/proxy?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);

    if (!response.ok) return;

    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);

    const aTag = document.createElement("a");
    aTag.href = blobUrl;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    window.URL.revokeObjectURL(blobUrl);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-stack Professional</span>
            <h1 className="h1 mb-6">
              Hello I am <br /> <span className="text-accent">Andrii D.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Experienced Lead Full Stack Developer skilled in web and backend
              development, cloud architecture, and QA automation. Passionate
              learner, multilingual, and culturally diverse, balancing tech
              expertise with creativity.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => {
                  downloadFileAtUrl(CV_PUBLIC_URL);
                }}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
