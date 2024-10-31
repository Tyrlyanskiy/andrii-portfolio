"use client";

import { FaHtml5, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiTypescript,
  SiSelenium,
  SiAmazondynamodb,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "Curious and enthusiastic, I have a passion for exploring new ideas, whether diving into sci-fi and fantasy worlds or honing my skills through gaming and soccer. Born in Ukraine and now living in Germany, I enjoy balancing personal growth with family life, embracing both cultural diversity and new experiences. Fluent in Ukrainian, Russian, and German, I’m dedicated to achieving fluency in English, bringing a love of learning and openness to everything I do.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Andrii D.",
    },
    {
      fieldName: "Email",
      fieldValue: "andrii.d.code@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Cologne",
    },
    {
      fieldName: "Nationality",
      fieldValue: "German",
    },
    {
      fieldName: "Experience",
      fieldValue: `${new Date().getFullYear() - 2007}+ Years`,
    },
    {
      fieldName: "Languages",
      fieldValue: "English, German",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "I have over 15 years of experience in developing scalable and high-performance applications. Expertise in system architecture design, API integration, data management, and automation. Proven leader in mentoring development teams and collaborating with stakeholders to align technical solutions with business goals.",
  items: [
    {
      company: "PTS Group GmbH",
      position: "Full  Stack Developer",
      duration: "2024 - Now",
    },
    {
      company: "Deutche-Tailkauf GmbH",
      position: "Full  Stack Developer & Team Lead",
      duration: "2022 - 2024",
    },
    {
      company: "Brickbuy AG",
      position: "Full  Stack Developer & Team Lead",
      duration: "2019 - 2022",
    },
    {
      company: "Cleverbrige AG",
      position: "Full  Stack Developer",
      duration: "2015 - 2019",
    },
    {
      company: "Cleverbrige AG",
      position: "QA Automation",
      duration: "2013 - 2015",
    },
    {
      company: "Direct Edi Inc.",
      position: "QA & Team Lead",
      duration: "2007 - 2012",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "A well-rounded educational foundation in software development and computer science supports my extensive experience in the tech industry. I’ve pursued advanced learning in full-stack development, cloud computing, and data management through professional courses and certifications, continuously enhancing my skills to stay aligned with evolving technologies.",
  items: [
    {
      institution: "telc Deutsch Hochschule",
      degree: "Level C1",
      duration: "2012 - 2013",
    },
    {
      institution: "Kharkiv University",
      degree: "Engenier",
      duration: "2002 - 2007",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Skilled in system architecture, API integration, and data management, with a proven ability to lead and mentor teams, optimize workflows, and collaborate effectively to drive product success.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiAmazondynamodb />,
      name: "DBs",
    },
    {
      icon: <FaAws />,
      name: "aws cloud",
    },
    {
      icon: <SiSelenium />,
      name: "test automation",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item) => {
                      return (
                        <li
                          key={item.duration}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item) => {
                      return (
                        <li
                          key={item.duration}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill) => {
                    return (
                      <li key={skill.name}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item) => {
                    return (
                      <li
                        key={item.fieldName}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
