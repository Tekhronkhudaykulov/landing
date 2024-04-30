// "use client";
import { useClickAway } from "react-use";

import { useRef, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

import Logo from "../../../public/logo.svg";
// import Image from "next/image";

export const navDatas = [
  {
    name: "Преимущества",
    goTo: "advantages",
    el: "1"
  },
  {
    name: "О компании",
    goTo: "about",
    el: "2"

  },
  {
    name: "Услуги",
    goTo: "services",
    el: "1"

  },
  {
    name: "Галерея",
    goTo: "gallery",
    el: "4"

  },
  {
    name: "Отзывы",
    goTo: "reviews",
    el: "5"

  },
  {
    name: "Контакты",
    goTo: "contacts",
    el: "6"

  },
];

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <header className="absolute top-0 left-0 w-full">
        <div className="max-container flex items-center justify-between fixed top-0 bg-black z-[9999]">
          <motion.a initial={{ y: -100 }} animate={{ y: 0 }} href="/">
            <img src={Logo} alt="" />
          </motion.a>
          <nav className="text-white">
            <ul className="lg:flex hidden mx-6 flex-wrap gap-x-8 text-lg uppercase">
              {navDatas.map((nav, index) => (
                <motion.li
                  key={nav.name}
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                >
                  <a>{nav.name}</a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="lg:hidden "
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Hamburger toggled={isOpen} size={28} toggle={setOpen} />
            </motion.div>
          </nav>
          <motion.div
            className="lg:block hidden text-white"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
          >
            <a
              href="tel:+998949187177"
              className="py-[11px] hover:bg-white hover:text-black hover:border-black px-[22px] border transition-all rounded-[30px]"
            >
              Позвонить
            </a>
          </motion.div>
        </div>
      </header>
      {isOpen && <MobileMenu  />}
    </div>
  );
}
export default Navbar;
