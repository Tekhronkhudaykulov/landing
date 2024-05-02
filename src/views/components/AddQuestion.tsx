import { useState } from "react";
import { AccordionDemo } from "./AccordionDemo";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

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
const AddQuestions = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      data-aos="zoom-out-right"
      data-aos-duration="1000"
      className="lg:flex mb-10 mt-16 md:mb-24 gap-x-28 items-start"
    >
      <div className="flex-[55%] flex-grow-0 max-lg:mb-10">
        <AccordionDemo />
      </div>
      <div className="max-lg:grid max-lg:max-w-96 max-lg:mx-auto">
        <button
          onClick={handleOpen}
          className="py-[11px] hover:bg-black hover:text-white hover:border-white transition-all border-[#262626] text-black px-[22px] border rounded-[30px] text-2xl"
        >
          ЗАДАТЬ ВОПРОС
        </button>
      </div>

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
              className={`uppercase text-4xl sm:text-[42px] font-bold  !font-[Montserrat] text-[#262626] mt-[20px] text-center xl:text-start `} //${gerhaus.className}
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
                    id="ownerModal"
                    name="owner"
                  />
                  <label htmlFor="ownerModal">Владелец </label>
                </div>
                <div className="ml-[20px] flex items-center gap-x-1">
                  <input
                    className="accent-slate-950"
                    type="radio"
                    id="designerModal"
                    name="owner"
                  />
                  <label htmlFor="designerModal">Дизайнер</label>
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
};

export default AddQuestions;
