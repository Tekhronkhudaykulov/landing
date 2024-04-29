import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./utils.scss";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,

  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Ma'lumotnoma", "sub1", [
    getItem("Darslik majmualari", "1"),
    getItem("Hisobdan chiqariladigan darsliklar", "2"),
    getItem("Majmua turi", "3"),
    getItem("Yillar", "4"),
    getItem("O'quv metodik majmualari", "5"),
  ]),
];

const SideBarMenu: React.FC = () => {
  const [current, setCurrent] = useState("1");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    switch (e.key) {
      case "1":
        navigate("/one");
        break;
      case "2":
        navigate("/two");
        break;
      case "3":
        navigate("/three");
        break;
      case "4":
        navigate("/four");
        break;
      case "5":
        navigate("/five");
        break;
      default:
      // code block
    }
  };

  return (
    <>
      <Menu
        className="bg-none border-none ml-[5px] text-lg "
        onClick={onClick}
        style={{ width: 210 }}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};

const tableList = [
  {
    id: 1,
    img: "https://kutubxona-api.itsm.uz/files/uploads/photo/base_library_local/40.jpg",
    motherLang: "ona tili",
    year: "2023",
    class: "4-sinf",
    DarslikVazni: "10kg",
    strix: "---",
    author: "Sardor Rahmonob Asad ogli",
  },
  {
    id: 2,
    img: "https://kutubxona-api.itsm.uz/files/uploads/photo/base_library_local/40.jpg",
    motherLang: "ona tili",
    year: "2023",
    class: "4-sinf",
    DarslikVazni: "10kg",
    strix: "---",
    author: "Sardor Rahmonob Asad ogli",
  },
  {
    id: 3,
    img: "https://kutubxona-api.itsm.uz/files/uploads/photo/base_library_local/40.jpg",
    motherLang: "ona tili",
    year: "2023",
    class: "4-sinf",
    DarslikVazni: "10kg",
    strix: "---",
    author: "Sardor Rahmonob Asad ogli",
  },
  {
    id: 4,
    img: "https://kutubxona-api.itsm.uz/files/uploads/photo/base_library_local/40.jpg",
    motherLang: "ona tili",
    year: "2023",
    class: "4-sinf",
    DarslikVazni: "10kg",
    strix: "---",
    author: "Sardor Rahmonob Asad ogli",
  },
];
export { SideBarMenu, tableList, getItem };
