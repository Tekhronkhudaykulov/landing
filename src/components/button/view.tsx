import { Button } from "primereact/button";

interface ButtonType {
  onClick?: () => void;
}
const ButtonAdd = ({ onClick }: ButtonType) => {
  return (
    <div className="card flex justify-content-center">
      <Button
        onClick={onClick}
        label="Qo'shish"
        className="bg-[blue] text-[white]"
      />
    </div>
  );
};

export { ButtonAdd };
