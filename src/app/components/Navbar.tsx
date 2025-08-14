import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import portfolioData from "../data/Constant.js";

interface MenuItem {
  id: string;
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const menuItems: MenuItem[] = [
    { id: "/", label: "Home", href: "/" },
    { id: "/about", label: "About", href: "/about" },
    { id: "/services", label: "Services", href: "/services" },
    { id: "/blog", label: "Blog", href: "/blog" },
    { id: "/contact", label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex justify-center ${
        isScroll
          ? "bg-[#000000] opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 text-white pt-2 pb-2 w-[90%] bg-[#000000] rounded-b-3xl shadow-lg transition-all duration-500 ease-in-out">
        
        {/* Logo */}
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="logo text-xl lg:text-2xl font-bold w-[110px]">
            <span className="inline animate-gradient whitespace-pre bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center">
              &lt;Sooubh/&gt;
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="hidden md:flex group relative items-center justify-center px-4 lg:px-6 lg:py-2 py-1.5 rounded-2xl bg-[#212121] text-lg font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
            <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>

            <ul className="relative md:flex space-x-10 lg:space-x-16">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`text-lg hover:text-[#ffaa40] transition cursor-pointer ${
                    pathname === item.href ? "text-[#ffaa40]" : ""
                  }`}
                >
                  <Link href={item.href} onClick={handleMenuItemClick}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#ffaa40] transition cursor-pointer"
          >
            <FaGithub className="text-2xl lg:text-3xl" />
          </a>
          <a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#ffaa40] transition cursor-pointer"
          >
            <FaLinkedin className="text-2xl lg:text-3xl" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-2xl hover:text-[#ffaa40] transition cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-16 w-4/5 bg-[#212121]/50 backdrop-blur-md rounded-lg shadow-lg p-4 md:hidden items-center z-50"
            >
              <ul className="flex flex-col space-y-4 items-center">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={`text-lg hover:text-[#ffaa40] transition cursor-pointer ${
                      pathname === item.href ? "text-[#ffaa40]" : ""
                    }`}
                  >
                    <Link href={item.href} onClick={handleMenuItemClick}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center items-center gap-4 mt-4">
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#ffaa40] transition cursor-pointer"
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#ffaa40] transition cursor-pointer"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
