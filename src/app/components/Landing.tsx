import { easeInOut, motion } from "framer-motion";

interface LandingProps {
  subject: string;
  styles: string;
}

const Landing = ({ subject, styles }: LandingProps) => {
  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-[#101827] text-white">
      <motion.div
        className="flex flex-col items-center"
        initial={{ y: "40%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <h1 className="text-shadow-3xs text-4xl xs:text-5xl text-center font-extrabold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl mx-2">
          Learn A Level{" "}
          <span
            className={`bg-gradient-to-r ${styles} bg-clip-text text-transparent`}
          >
            {subject}
          </span>
        </h1>
        <label className="xs:text-[16px] mt-7 text-center text-sm tracking-tight md:text-[18px] lg:text-[20px]">
          <u>Every</u> single OCR topic
        </label>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-4 lg:mt-4">
          <button className="w-[250px] mt-9 cursor-pointer rounded-sm bg-[#0874f4] px-7 py-3 text-[12px] font-bold shadow-lg hover:bg-blue-600 lg:w-[350px] md:text-xl">
            View All Content
          </button>
          <button className="xs:w-[250px] mt-4 cursor-pointer rounded-sm bg-gray-700 px-7 py-3 text-[13px] font-bold shadow-lg hover:bg-gray-800 sm:mt-9 lg:w-[350px] md:text-xl">
            Overview
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
