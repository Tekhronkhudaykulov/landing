// import Image from "next/image";
import rightImg from "../../../public/rightImg.png";
// import Gerhaus from "next/font/local";
// import Futura from "next/font/local";

// const gerhaus = Gerhaus({ src: "../fonts/gerhaus/gerhaus.ttf" });
// const futura = Futura({ src: "../fonts/futura.ttf" });

function CompanyInfo() {
  return (
    <div
      style={{ gridTemplateColumns: "46% 1fr" }}
      className="mt-28 md:grid items-center mb-16 md:mb-40"
      data-aos="zoom-out-right"
      data-aos-duration="1000"
    >
      <img src={rightImg} alt="" className="max-md:mb-10" />
      <div className="md:pl-[70px] p-4">
        <h4
          className={`uppercase text-4xl lg:text-7xl text-[#262626] mb-[34px] `} //${gerhaus.className}
        >
          О КОМПАНИИ
        </h4>
        {/* ${futura.className} */}
        <p className={`text-[#595959] text-[18px]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <p
          className={`mt-[33px] text-[#595959] text-[18px]`} // ${futura.className}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
export default CompanyInfo;
