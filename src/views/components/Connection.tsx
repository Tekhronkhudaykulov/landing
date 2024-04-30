// import Futura from "next/font/local";
// const futura = Futura({ src: "../fonts/futura.ttf" });
// import Gerhaus from "next/font/local";
// const gerhaus = Gerhaus({ src: "../fonts/gerhaus/gerhaus.ttf" });

function Connection() {
  return (
    <div
      className="bg-[#EEEEEE] p-5 sm:px-12 rounded-[20px] xl:max-w-[528px]"
      data-aos="zoom-in-left"
      data-aos-duration="1000"
    >
      <p
        className={`uppercase text-4xl sm:text-[45px] text-[#262626] text-center xl:text-start font-[Gerhaus]`} //${gerhaus.className}
      >
        Обратная связь
      </p>

      {/* ${futura.className} */}
      <p
        className={` text-lg text-center xl:text-start text-[#727272] mt-7 font-[FuturaPT]`}
      >
        Напишите нам свое предложение или пожелание:
      </p>

      <form action="form.php" method="post" className="grid">
        <input
          type="text"
          className="bg-inherit outline-none border-b border-[#000000] mt-9 w-full p-3 pl-1"
          placeholder="Ваше имя*"
          id="name"
        />
        <input
          type="text"
          className="bg-inherit outline-none border-b border-[#000000] mt-9 w-full p-3 pl-1"
          placeholder="Ваш телефон*"
          id="phone"
        />
        <input
          type="text"
          id="comment"
          className="bg-inherit outline-none border-b border-[#000000] mt-9 w-full p-3 pl-1"
          placeholder="Комментарий*"
        />

        <div className="flex mt-9">
          <div className="flex items-center gap-x-1">
            <input
              className="accent-slate-950"
              type="radio"
              id="name"
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
              name="owner"
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
  );
}
export default Connection;
