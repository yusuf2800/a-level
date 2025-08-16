"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "../components/Navbar";
import { Contact } from "../components/Contact";
import Landing from "../components/Landing";
import Overview from "../components/Overview";

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
        <Landing subject="Further Maths" styles="from-green-400 to-teal-300" />
        <Overview topics={[]} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
