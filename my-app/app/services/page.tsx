"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Skilled in creating responsive, user-friendly interfaces with a focus on performance and accessibility, I leverage modern frameworks and tools to deliver intuitive, engaging web applications that meet both user needs and business objectives.",
    href: "",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Proficient in building secure, scalable, and efficient backend systems, I design architectures that handle complex data processing and integrate seamlessly with front-end applications and third-party services.",
    href: "",
  },
  {
    num: "03",
    title: "Cloud Architecture",
    description:
      "Experienced in cloud infrastructure design and management, I architect solutions that optimize resource use, enhance system scalability, and ensure robust security, leveraging best practices to support seamless deployment and maintenance.",
    href: "",
  },
  {
    num: "04",
    title: "QA Automation",
    description:
      "Strong background in quality assurance automation, developing comprehensive testing frameworks to ensure software reliability and performance, streamline release cycles, and reduce manual testing efforts.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service) => {
            return (
              <div
                key={service.num}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
