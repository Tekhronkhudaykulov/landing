import { useState } from "react";
import "./style.scss";
import { SideBarMenu } from "../../utils";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [active] = useState(false);
  const [isHas] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={` ${
        open ? "w-72" : "w-24"
      } sidebar-container h-screen p-5 pt-8 relative duration-300`}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-linierRadius
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        {open ? (
          <img
            src="https://kutubxona.maktab.uz/img/logo.68af1d7f.jpg"
            width="200px"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            } `}
          />
        ) : (
          <img src={Logo} alt="" />
        )}
      </div>
      <ul className="pt-6">
        <li
          className={`${
            active === true && "active"
          } flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 
              ${isHas ? "mt-9" : "mt-2"}  `}
              onClick={() => {navigate('/reports')}}
        >
          <a
            className={`${
              !open && "hidden"
            }text-start origin-left duration-200 text-[#625f6e]`}
          >
            Statistika
          </a>
        </li>
        <li
          className={`${
            active === true && "active"
          } flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 
              ${isHas ? "mt-9" : "mt-2"}  `}
              onClick={() => {navigate('/buyurtmalar')}}
        >
          <a
            className={`${
              !open && "hidden"
            }  origin-left duration-200 text-[#625f6e]`}
          >
            Buyurtmalar
          </a>
        </li>
        {/* <li
          className={`${
            active === true && "active"
          } flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 
              ${isHas ? "mt-9" : "mt-2"}  `}
        >
          <a
            className={`${
              !open && "hidden"
            }  origin-left duration-200 text-[#625f6e]`}
          >
            Darsliklar
          </a>
        </li> */}
        <li
          className={`${
            open ? "w-72" : "w-24"
          }`}
        >
          <SideBarMenu />
        </li>

        <li
          className={`${
            active === true && "active"
          } flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 
            ${isHas ? "mt-9" : "mt-2"}  `}
        >
          <a
            className={`${
              !open && "hidden"
            }  origin-left duration-200 text-[#625f6e]`}
          >
            Hisobotlar
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
