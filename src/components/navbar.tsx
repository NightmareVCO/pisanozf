import React, { useState } from "react";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const linkStyle = "text-2xl leading-6 font-jost text-primary-300 hover:text-primary-400 hover:scale-105 transition-transform-all duration-300";

  return (
    <div className="flex items-center justify-between w-full max-w-full px-4 py-4 m-auto bg-white border-b-2 lg:px-28 border-primary-100">
      <a href="/">
        {" "}
        <img src="/logo.webp" alt="logo" className="w-96" />
      </a>

      {/* Nav List for Desktop */}
      {matches && (
        <nav className="flex flex-row gap-10">
          <a href="/" className={linkStyle}>
            Inicio
          </a>
          <a href="/services" className={linkStyle}>
            Servicios
          </a>
          <a href="/blog" className={linkStyle}>
            Blog
          </a>
          <a href="/contact" className={linkStyle}>
            Contacto
          </a>
        </nav>
      )}

      {!matches && (
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1 cursor-pointer"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center z-50"
        >
          <a href="/" className={linkStyle}>
            Inicio
          </a>
          <a href="/services" className={linkStyle}>
            Servicios
          </a>
          <a href="/blog" className={linkStyle}>
            Blog
          </a>
          <a href="/contact" className={linkStyle}>
            Contacto
          </a>
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;
