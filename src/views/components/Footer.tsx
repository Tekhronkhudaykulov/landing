// "use client";
// import Image from "next/image";
import { navDatas } from "./Navbar";
import logo from "../../../public/logo.svg";
import tg from "../../../public/tg.svg";
import insta from "../../../public/insta.svg";
// import yt from "../../../public/yt.svg";
// import twit from "../../../public/twit.svg";
import facebook from "../../../public/facebook.svg";
import { Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#242424] flex pb-10">
      <div className="in-container mt-11 grid md:flex gap-x-12 gap-y-5">
        <a href="/" className="mb-4">
          <img src={logo} alt="" />
        </a>
        <nav className="flex-1">
          <ul className="text-[#BCBCBC] grid grid-cols-2 gap-x-7 gap-y-3">
            {navDatas.map((nav) => (
              <li
                key={nav.name}
                onClick={() =>
                  document.getElementById(nav.el)?.scrollIntoView()
                }
                className="text-lg font-[Montserrat]"
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-white gap-y-3 grid ">
          <div className="flex items-center gap-x-3">
            <Phone />
            <h4>
              <p className="text-[15px] text-[#727272]">Номер телефона:</p>
              <a
                className="font-bold text-[18px] text-white"
                href="tel:998971550555"
              >
                +99897 751 75 19
              </a>
            </h4>
          </div>
          <div className="flex items-center gap-x-3">
            <Mail width={30} />
            <h4>
              <p className="text-[15px] text-[#727272]">Почта:</p>
              <a className="font-bold text-[18px] text-white" href="/">
                crealine.m@gmail.com
              </a>
            </h4>
          </div>
          <p className="font-bold text-[18px] text-white">Мы в соц.сетях:</p>
          <div className="flex gap-x-3">
            <div className="w-9 h-9 rounded-full">
              <img alt="d" src={tg} />
            </div>
            <div className="w-9 h-9 rounded-full">
              <a href="https://www.instagram.com/crealine.uz/" target="blank">
                <img alt="d" src={insta} />
              </a>
            </div>
            {/* <div className="bg-white w-9 h-9 rounded-full">
              <img alt="d" src={yt} />
            </div> */}
            {/* <div className="bg-white w-9 h-9 rounded-full">
              <img alt="d" src={twit} />
            </div> */}
            <div className="bg-white w-9 h-9 rounded-full">
              <a href="https://www.facebook.com/crealine.uz">
                <img alt="d" src={facebook} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
