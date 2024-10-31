"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { animate, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { title } from "process";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+49) 173 21 88 000",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "andrii.d.code@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Cologne DE",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-secondary rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Driven by a commitment to building impactful, high-quality
                software solutions, I bring both technical expertise and a
                collaborative spirit to every project. Whether designing
                scalable architectures, optimizing cloud systems, or leading a
                team, I focus on delivering results that align with business
                goals and exceed expectations. If you’re looking for a seasoned
                developer who thrives on innovation, continuous learning, and
                fostering a productive, supportive work environment, let’s
                connect to explore how we can make a real impact together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"></Input>
                <Input type="lastname" placeholder="Lastname"></Input>
                <Input type="email" placeholder="Email address"></Input>
                <Input type="phone" placeholder="Phone number"></Input>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="wds">Web Development</SelectItem>
                    <SelectItem value="bds">Backend Development</SelectItem>
                    <SelectItem value="cas">Cloud Architecture</SelectItem>
                    <SelectItem value="qas">QA Automation</SelectItem>
                    <SelectItem value="all">All in one</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <div className="flex justify-center xl:justify-end">
                <Button size="md" className="max-w-44">
                  Send message
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => {
                return (
                  <li key={item.title} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
