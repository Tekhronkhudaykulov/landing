// import Image, { StaticImageData } from "next/image";
// import Gerhaus from "next/font/local";
// const gerhaus = Gerhaus({ src: "../fonts/gerhaus/gerhaus.ttf" });
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
// import Futura from "next/font/local";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
// const futura = Futura({ src: "../fonts/futura.ttf" });

type TCompanyFullBox = {
  title: string;
  image: string;
  description: string;
  subtitle: string;
  subtitleDesc: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "56%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 450,
  zindex: 9999,
  width: "100%",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function CompanyFullBox({ image, title, description }: TCompanyFullBox) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="grid justify-items-center mb-16">
      <p
        className={`uppercase lg:text-[90px] md:text-[70px] text-[50px] font-[Gerhaus]`} //${gerhaus.className}
      >
        {title}
      </p>
      <img
        src={image}
        className="object-cover  md:object-contain  xl:block hidden"
        alt=""
      />
      <img
        src={image}
        className="min-h-96 lg:object-contain  xl:hidden block rounded-[35px] in-container max-w-[800px] object-cover"
        alt=""
      />
      <div
        className={`grid lg:grid-cols-2 gap-x-[100px] items-center my-5 lg:my-14 in-container font-[FuturaPT]`} //${futura.className}
      >
        <p className="text-lg max-lg:mb-5">{description}</p>
        <div className="grid sm:grid-cols-2 gap-3 items-center">
          {/* <p className="text-[#374045] text-[25px]">
            {subtitle}
            <p className="text-[18px]">{subtitleDesc}</p>
          </p> */}
          <p className="text-[20px] font-bold">
            Что включено:
            <br />
            <span className="text-[18px] font-normal ml-[3px]">
              Верхний ярус кухни включает в себя: Каркас Внутренние полки Фасады
              Выдвижные ящики
            </span>
          </p>
          <p
            className="w-[240px] text-[18px] font-normal "
            data-aos-duration="1000"
          >
            Нижний ярус состоит из: Тумбы с выдвижными ящиками Столешницы
            Бытовой техники
          </p>
        </div>
      </div>
      <button
        onClick={handleOpen}
        className="py-[11px] hover:bg-black hover:text-white hover:border-white transition-all border-[#262626] text-black px-[22px] border rounded-[30px] font-[FuturaPT] text-2xl"
      >
        Заказать
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="sm:px-12 !p-0 rounded-[20px] xl:max-w-[528px] relative">
            <div
              className="absolute right-[-5%] top-[-8%]"
              onClick={handleClose}
            >
              <CloseIcon style={{ fontSize: "30px" }} />
            </div>
            <p
              className={`uppercase text-4xl sm:text-[45px] text-[#262626] mt-[20px] text-center xl:text-start `} //${gerhaus.className}
            >
              Обратная связь
            </p>
            <p
              className={` text-[15px] text-center xl:text-start text-[#727272] mt-7`} //${futura.className}
            >
              Напишите нам свое предложение или пожелание:
            </p>
            <form action="form.php" method="post" className="grid">
              <input
                type="text"
                className="bg-inherit outline-none border-b border-[#000000] mt-9 w-full p-3 pl-1"
                placeholder="Ваше имя*"
                id="name"
                name="name"
              />
              <input
                type="text"
                className="bg-inherit outline-none border-b border-[#000000] mt-9 w-full p-3 pl-1"
                placeholder="Ваш телефон*"
                id="phone"
                name="phone"
              />
              <input
                type="text"
                className="bg-inherit outline-none border-b border-[#000000] mt-9 w-full p-3 pl-1"
                placeholder="Комментарий*"
                id="comment"
                name="comment"
              />
              <div className="flex mt-9">
          <div className="flex items-center gap-x-1">
            <input
              className="accent-slate-950"
              type="radio"
              id="owner"
              name="owner"
              value="owner"
              
            />
            <label htmlFor="owner">Владелец </label>
          </div>
          <div className="ml-[20px] flex items-center gap-x-1">
            <input
              className="accent-slate-950"
              type="radio"
              id="designer"
              name="designer"
              value="designer"
            />
            <label htmlFor="designer">Дизайнер</label>
          </div>
        </div>
              <button
                className={`bg-[#262626] rounded-[6px] font-bold text-[17px] hover:opacity-85 transition-all py-4 px-16 sm:px-36 text-white mt-14 `} //${futura.className}
              >
                Отправить
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default CompanyFullBox;
