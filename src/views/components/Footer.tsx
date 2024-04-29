// "use client";
// import Image from "next/image";
import { navDatas } from "./Navbar";
import logo from "../../../public/logo.svg";
import tg from "../../../public/tg.svg";
import insta from "../../../public/insta.svg";
import yt from "../../../public/yt.svg";
import twit from "../../../public/twit.svg";
import facebook from "../../../public/facebook.svg";

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
              <li key={nav.name}>{nav.name}</li>
            ))}
          </ul>
        </nav>
        <div className="text-white gap-y-3 grid ">
          <div className="flex items-center gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <h4>
              <p className="text-[15px] text-[#727272]">Номер телефона:</p>
              <a
                className="font-bold text-[18px] text-white"
                href="tel:998971550555"
              >
                +998 (97) 155-05-55
              </a>
            </h4>
          </div>
          <div className="flex items-center gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <h4>
              <p className="text-[15px] text-[#727272]">Почта:</p>
              <a className="font-bold text-[18px] text-white" href="/">
                Почта
              </a>
            </h4>
          </div>
          <p className="font-bold text-[18px] text-white">Мы в соц.сетях:</p>
          <div className="flex gap-x-3">
            <div className="w-9 h-9 rounded-full">
              <img alt="d" src={tg} />
            </div>
            <div className="w-9 h-9 rounded-full">
              <img alt="d" src={insta} />
            </div>
            <div className="bg-white w-9 h-9 rounded-full">
              <img alt="d" src={yt} />
            </div>
            <div className="bg-white w-9 h-9 rounded-full">
              <img alt="d" src={twit} />
            </div>{" "}
            <div className="bg-white w-9 h-9 rounded-full">
              <img alt="d" src={facebook} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
