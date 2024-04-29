import { TextFielDownload, TextField, SelectItem } from "../input/view";

const ModalView = ({ onClick }: any) => {
  return (
    <div>
      <div className="flex justify-between p-[20px]">
        <div>
          <TextField title="Darslik nomi Uz" pl="" bg="F6F6F7" />
          <TextField title="Muallif uz " bg="F6F6F7" pl="" />
          <SelectItem title="Nashr yili" bg="F6F6F7" />
          <TextFielDownload title="Darslik rasmi png yoki jpg" />
        </div>
        <div>
          <TextField title="Rasm nomi ru" pl="" bg="F6F6F7" />
          <TextField title="Muallif ru " pl="" bg="F6F6F7" />
          <SelectItem title="Sinf" bg="F6F6F7" />
          <TextField title="Shtrix/kod" pl="" bg="F6F6F7" />
        </div>
      </div>
      <div className="p-[20px] float-right">
        <button
          className="mr-[30px] bg-[white] text-[#9D58C3] border-[#9D58C3]"
          onClick={onClick}
        >
          Ortga
        </button>
        <button
          className="bg-[#9D58C3] text-[white]  border-[#9D58C3]"
          onClick={onClick}
        >
          Qoshish
        </button>
      </div>
    </div>
  );
};

export default ModalView;
