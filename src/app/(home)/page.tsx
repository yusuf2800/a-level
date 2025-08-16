"use client";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "../components/Overview";
import { Contact } from "../components/Contact";

const Page = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: number = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 90) {
      setHidden(true);
    } else if (latest + 4 < previous) {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-50 flex w-full justify-center bg-[#1f2937]"
        variants={{
          visible: { y: 0 },
          hidden: { y: -70 },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Navbar />
      </motion.div>

      <div className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-[#101827]">
        <Landing
          subject="Computer Science"
          styles="from-blue-500 to-teal-400"
        />
        <Overview
          topics={[
            {
              title: "1.1",
              info: "The characteristics of contemporary processors input, output and storage devices",
            },
            { title: "1.2", info: "Software and software development" },
            { title: "1.3", info: "Exchanging Data" },
            {
              title: "1.4",
              info: "Data types, data structures and algorithms",
            },
            { title: "1.5", info: "Legal, moral, cultural and ethical issues" },
            { title: "2.1", info: "Elements of computational thinking" },
            { title: "2.2", info: "Problem solving and programming" },
            { title: "2.3", info: "Algorithms" },
          ]}
        />
      </div>
      <Contact />
    </>
  );
};

export default Page;
