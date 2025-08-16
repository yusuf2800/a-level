"use client";

import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { name: "Computer Science", href: "/" },
    { name: "Maths", href: "/maths" },
    { name: "Further Maths", href: "/fm" },
  ];

  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav
      className="fixed z-50 mt-4 rounded-full border border-gray-700/30 bg-gray-800/30 px-0.5 py-0.5 text-white shadow-lg backdrop-blur-lg mx-1"
    >
      <ul className="relative flex justify-center sm:gap-2 font-bold text-[13px] xs:text-[14.5px] sm:text-[17px] md:text-[16px] lg:text-[18px]">
        {navItems.map(({ name, href }) => {
          const isActive = pathname === href;

          return (
            <li
              key={href}
              onClick={() => router.push(href)}
              className="relative cursor-pointer px-5 py-0.5 tracking-tight"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-gray-800"
                  transition={{ type: "spring", stiffness: 500, damping: 50 }}
                />
              )}
              <span className="relative z-10">{name}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
