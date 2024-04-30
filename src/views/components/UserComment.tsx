// import Image, { StaticImageData } from "next/image";
// import Futura from "next/font/local";
// const futura = Futura({ src: "../fonts/futura.ttf" });

type TUserComment = {
  name: string;
  image: string;
  description: string;
};

function UserComment({ description, image, name }: TUserComment) {
  return (
    <div className="w-[280px]">
      <img
        className="w-[280px] h-[280px] mb-3 rounded-full"
        src={image}
        alt=""
      />
      {/* ${futura.className} */}
      <h4 className={`text-[#374045] font-bold text-3xl font-[FuturaPT]`}>{name}</h4>
      {/* ${futura.className} */}
      <p className={`mt-2 text-xl font-[FuturaPT]`}>{description}</p>
    </div>
  );
}
export default UserComment;
