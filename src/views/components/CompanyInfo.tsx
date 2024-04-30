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
          С нами идеи, воплощаются в реальность
        </h4>
        {/* ${futura.className} */}
        <p className={`text-[#595959] text-[18px]`}>
          Молодая компания из Узбекистана, специализирующаяся на производстве
          комфортной мебели по индивидуальным заказам, стремится не просто
          удовлетворить требования своих клиентов, а подарить им настоящее
          удовольствие от использования каждого изделия. Индивидуальный подход к
          каждому клиенту является ключом к успеху компании, а воплощение в
          жизнь их желаний и предпочтений ведет к созданию уникальной и
          неповторимой мебели, полностью отвечающей потребностям заказчика.
        </p>
        <p
          className={`mt-[33px] text-[#595959] text-[18px]`} // ${futura.className}
        >
          Основные принципы, на которых строится деятельность компании, – это
          комфорт, высокое качество, стильный дизайн и безупречный стандарт
          обслуживания. Каждое изделие создается с любовью и вниманием к
          деталям, чтобы обеспечить максимальный комфорт и уют в доме каждого
          клиента. Стильные дизайнерские решения и индивидуальность каждого
          предмета мебели делают бренд узнаваемым и передают его философию
          красоты и эстетики.
        </p>
      </div>
    </div>
  );
}
export default CompanyInfo;
