import { Button, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div className="w-[60%] p-[20px]  h-[100vh] flex items-center">
        <img
          src="https://kutubxona.maktab.uz/img/loginback.18acf384.png"
          alt=""
          className="w-[100%]"
        />
      </div>
      <div className="flex justify-center w-[35%] items-center flex-col h-[100vh] bg-white">
        <div className="w-[400px] ">
          <img
            className="w-[100%] object-cover mb-[20px]"
            src="https://kutubxona.maktab.uz/img/logo.68af1d7f.jpg"
            alt=""
          />
        </div>
        <Space direction="vertical" className="w-[450px]">
          <p>Foydalanuvchi nomi</p>
          <Input placeholder="Basic usage" className="h-[40px]" />
          <p>Maxfiy parol</p>
          <Input.Password placeholder="input password" className="h-[40px] " />
          <div className=" mt-[10px] grid gap-[10px]">
            <Button
              type="text"
              className="h-[40px] w-[100%] bg-[#b649ae] text-[white] col-span-2 row-span-1"
              onClick={() => navigate("/reference")}
            >
              Vazirlik-admin profili
            </Button>
            <Button
              type="text"
              className="h-[40px] w-[100%] bg-[#b649ae] text-[white] "
              onClick={() => navigate("/")}
            >
              Maktab
            </Button>
            <Button
              type="text"
              className="h-[40px] w-[100%] bg-[#b649ae] text-[white] "
            >
              Ta'lim ta'minot
            </Button>
            <Button
              type="text"
              className="h-[40px] w-[100%] bg-[#b649ae] text-[white] "
            >
              Viloyat
            </Button>
            <Button
              type="text"
              className="h-[40px] w-[100%] bg-[#b649ae] text-[white] "
            >
              Tuman
            </Button>
            <Button
              type="text"
              className="h-[40px] w-[100%] bg-[#b649ae] text-[white] col-span-2 row-span-1"
            >
              Respublika ta'lim ta'minoti
            </Button>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default Auth;
