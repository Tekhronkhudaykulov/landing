import { DownloadIcon } from "../../utils/icon";

const TextField = ({ title, bg = "white", pl = "Search" }: any) => {
  return (
    <div className="flex flex-col mt-[20px]">
      <label htmlFor="">{title}</label>
      <input
        className={`p-[12px] w-[270px] h-[40px]  bg-[#${bg}]  outline-none rounded-[7px]`}
        placeholder={pl}
        type="text"
      />
    </div>
  );
};
const SelectItem = ({ title, bg = "white" }: any) => {
  return (
    <div className="flex flex-col  mt-[20px]">
      <label htmlFor="cars">{title}</label>
      <select
        className={`p-[12px] w-[270px] h-[40px] bg-[#${bg}] outline-none rounded-[7px]`}
        name="cars"
        id="cars"
      >
        <option value="volvo">1</option>
        <option value="saab">2</option>
        <option value="opel">3</option>
        <option value="audi">4</option>
      </select>
    </div>
  );
};

const TextFielDownload = ({ title }: any) => {
  return (
    <div className="relative flex flex-col  mt-[20px]">
      <label htmlFor="">{title}</label>
      <input
        type="file"
        className="w-[270px] z-[9999] opacity-0 bottom-[-10%] left-[49%]  h-[40px] absolute"
        id="img_file"
      />
      <input
        className="p-[12px] w-[270px] relative h-[40px] bg-[#F6F6F7] outline-none rounded-[7px]"
        id="img_file"
        type="text"
      />

      <div className={`absolute  top-[55%] left-[85%]`}>
        <DownloadIcon />
      </div>
    </div>
  );
};

export { SelectItem, TextField, TextFielDownload };
