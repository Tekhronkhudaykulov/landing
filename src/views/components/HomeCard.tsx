// const futura = Futura({ src: "../fonts/futura.ttf" });
// import Futura from "next/font/local";

type THomeCard = {
  text: string;
  description: string;
};
function HomeCard({ description, text }: THomeCard) {
  return (
    <div
      style={{ backgroundPositionX: "50px" }}
      className="max-w-[331px] w-full bg-bottom bg-[url('/one.svg')] bg-no-repeat pt-6 rounded-[30px] py-24 px-4 bg-[#EEEEEE]"
    >
      <p className="uppercase text-[#262626] h-[120px] font-semibold text-[25px] break-words font-[Montserrat]">
        {text}
      </p>
      {/* ${futura.className} */}
      <p className={`mt-1 text-xl font-[FuturaPT]`}>{description}</p>
    </div>
  );
}
export default HomeCard;
