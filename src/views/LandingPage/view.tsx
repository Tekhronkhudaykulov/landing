import CompanyFullBox from "../components/CompanyFullBox";
import CompanyInfo from "../components/CompanyInfo";
import Connection from "../components/Connection";
import ContactBox from "../components/ContactBox";
import HomeCard from "../components/HomeCard";
import { navDatas } from "../components/Navbar";
import UserComment from "../components/UserComment";
// import Image from "next/image";
import image1 from "../../../public/1.jpg";
import image2 from "../../../public/2.jpg";
import image3 from "../../../public/3.jpg";
import image4 from "../../../public/4.jpg";
import image5 from "../../../public/5.jpg";
import image6 from "../../../public/6.jpg";
import image7 from "../../../public/8.jpg";

import map from "../../../public/map.svg";
// import Futura from "next/font/local";
// const futura = Futura({ src: "../fonts/futura.ttf" });
// import Gerhaus from "next/font/local";
// const gerhaus = Gerhaus({ src: "../fonts/gerhaus/gerhaus.ttf" });
import companyFullKitchen from "../../../public/companyFull-kitchen.png";
import bedrom from "../../../public/bedrom.png";
import childRoom from "../../../public/childRoom.png";
import hotel from "../../../public/hotel.png";
import commentUser from "../../../public/commentUser.png";
import aleksey from "../../../public/aleksey.png";
import genadiy from "../../../public/genadiy.png";
import asad from "../../../public/Asad.jpg";
import bola from "../../../public/Bola.jpg";

import headerBg from "../../../public/headerBg.png";
import Footer from "../components/Footer";
import sendReqSvg from "../../../public/sendReq.svg";
import Logo from "../../../public/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Hamburger from "hamburger-react";
import { MobileMenu } from "../components/MobileMenu";
import AddQuestions from "../components/AddQuestion";

export default function LandingPage() {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <>
      {isOpen && <MobileMenu isOpen={isOpen} />}
      <AnimatePresence mode="wait">
        <main>
          {/* <Navbar /> */}

          <div ref={ref}>
            <header className="absolute top-0 left-0 w-full">
              <div>
                <div className="fixed top-0 left-0 right-0 bg-[black] z-[9999]">
                  <div className="max-container flex items-center justify-between">
                    <motion.a initial={{ y: -100 }} animate={{ y: 0 }} href="/">
                      <img src={Logo} alt="" />
                    </motion.a>
                    <nav className="text-white">
                      <ul className="lg:flex hidden mx-6 flex-wrap gap-x-8 text-lg uppercase">
                        {navDatas.map((nav, index) => (
                          <motion.li
                            key={nav.name}
                            initial={{ y: -100 }}
                            animate={{ y: 0 }}
                            transition={{ delay: (index + 1) * 0.1 }}
                          >
                            <a>{nav.name}</a>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div
                        className="lg:hidden "
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Hamburger
                          toggled={isOpen}
                          size={28}
                          toggle={setOpen}
                        />
                      </motion.div>
                    </nav>
                    <motion.div
                      className="lg:block hidden text-white"
                      initial={{ y: -100 }}
                      animate={{ y: 0 }}
                    >
                      <a
                        href="tel:+998949187177"
                        className="py-[11px] hover:bg-white hover:text-black hover:border-black px-[22px] border transition-all rounded-[30px]"
                      >
                        Позвонить
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="min-h-screen grid primary-bg-linear ">
            <div className="in-container flex justify-center flex-col text-white mt-[40px]">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className={`uppercase text-4xl sm:leading-[70px] font-[400] !font-[Gerhaus] leading-[50px] sm:text-5xl lg:text-8xl `} //${gerhaus.className}
              >
                <p>производим</p>
                <p className="w-fit sm:pl-32 mr-auto">ДИЗАЙНЕРСКУЮ</p>
                <p className="">МЕБЕЛЬ</p>
              </motion.div>
              <div
                className={`lg:flex grid gap-6 pt-4 lg:mt-[70px] sm:mt-0  text-white font-[FuturaPT] text-lg`} //${futura.className}
              >
                <div className="w-[50%">
                <motion.p
                  className="flex-1 "
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Молодая и динамично развивающая компания по производство
                  комфортной мебели в Узбекистане, работает по индивидуальному
                  заказу, которые будут доставлять удовольствие заказчикам от
                  использования.
                </motion.p>
                </div>
                {/* <motion.p
                className="flex-1"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit
                </motion.p> */}
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
              <img
                src={headerBg}
                className="w-full h-full object-cover"
                alt="headerBg"
              />
            </div>
          </div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={`uppercase in-container text-4xl sm:text-5xl sm:leading-[50px] leading-[46px] lg:text-8xl mt-14 md:mt-28 font-[Gerhaus]`} //${gerhaus.className}
          >
            <p className="premium">НАШи</p>
            <p className="w-fit sm:pl-32 mr-auto premium ">ПРЕИМУЩЕСТВА</p>
          </motion.div>

          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="lg:grid grid-cols-2 in-container gap-x-3"
          >
            <p
              className={`text-[#595959] lg:text-start sm:text-start text-start mb-5 sm:pr-20 font-[FuturaPT] text-xl`} //${futura.className}
            >
              Индивидуальный подход для каждого клиента, комфорт, качество,
              стильный дизайн и высокий стандарт обслуживания - основные
              составляющие бренда.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 ml-auto justify-items-center gap-[17px]">
              <HomeCard
                text="Гарантия на мебель от 1 года"
                description="На любую продукцию, произведенную нашей компанией мы даем гарантию минимум 1 год."
              />
              <HomeCard
                text="Замер, сборка, погрузка и доставка"
                description="Замер, сборка, погрузка и доставка мебели не входит в стоимость, для удобства заказчиков (бесплатно)."
              />
              <HomeCard
                text="Бесплатный инструктаж"
                description="Проводим бесплатный инструктаж, по правильному использованию мебели для заказчика."
              />
              <HomeCard
                text="Проверенная европейская техника"
                description="Проверенная европейская техника, сборки мебели и актуальность по отношению к мировым трендам."
              />
            </div>
          </div>

          <CompanyInfo />

          <CompanyFullBox
            description="Материалы, использованные в производстве кухонь Crealine, отвечают самым высоким стандартам качества, что обеспечивает долговечность и надежность каждого изделия. Благодаря индивидуальному подходу к каждому заказу, клиенты могут реализовать свои собственные идеи и предпочтения, создавая уникальное пространство, отражающее их стиль и характер."
            image={companyFullKitchen}
            subtitle="Что включено:"
            subtitleDesc="Верхний ярус кухни включает в себя:
            Каркас Внутренние полки Фасады
            Выдвижные ящики"
            title="КУхНЯ"
          />

          <CompanyFullBox
            description="Спальни Crealine позволяют воплотить в жизнь самые смелые идеи и представления о комфорте и стиле. Индивидуальный подход к каждому заказу позволяет клиентам выбирать сочетания цветов, фактуры и фурнитуры, создавая уникальное и неповторимое пространство, которое отражает их вкусы и желания.
            Отдыхая в спальне от Crealine, вы окунетесь в атмосферу роскоши и уюта, которая поможет вам полностью расслабиться и забыть о повседневных заботах. Каждый элемент мебели от этого бренда призван создать особую атмосферу гармонии и благополучия, делая ваше пространство уютным и привлекательным."
            image={bedrom}
            subtitle="Что включено:"
            subtitleDesc="Верхний ярус кухни включает в себя:
            Каркас Внутренние полки Фасады
            Выдвижные ящики"
            title="СПАЛЬНЯ"
          />
          <CompanyFullBox
            description="Дизайнерская детская от Crealine - это удивительное пространство, где воображение детей расцветает, а функциональность и стиль сочетаются с безопасностью и комфортом. Каждый элемент этой детской создан с любовью и заботой, чтобы вдохновить и позитивно влиять на развитие маленьких обитателей.Яркие и игривые цвета, сочные оттенки и интересные текстуры делают эту детскую неповторимой и веселой. Мебель и аксессуары дополнены уникальными дизайнерскими элементами, которые стимулируют фантазию и творчество детей."
            image={childRoom}
            subtitle="Что включено:"
            subtitleDesc="Верхний ярус кухни включает в себя:
            Каркас Внутренние полки Фасады
            Выдвижные ящики"
            title="детская"
          />
          <CompanyFullBox
            title="ГОСТИНАЯ"
            description="Дизайнерская гостиная от Crealine — это искусное сочетание элегантности, современности и функциональности, созданное для тех, кто ценит стиль и комфорт. Каждая деталь в этой гостиной воплощает в себе утонченность и гармонию, призванные вдохновить и удивить.Помещение окутано атмосферой изысканности благодаря изысканным материалам и тщательно подобранным элементам декора. Мягкие, но в то же время строгие линии мебели отражают современный дизайн, подчеркивая роскошь и функциональность каждого предмета."
            image={hotel}
            subtitle="Что включено:"
            subtitleDesc="Верхний ярус кухни включает в себя:
            Каркас Внутренние полки Фасады
            Выдвижные ящики"
          />

          <div className="in-container">
            <p
              className={`uppercase text-4xl mb-6 sm:text-5xl lg:text-8xl font-[Gerhaus]`} //${gerhaus.className}
              data-aos="zoom-out-right"
              data-aos-duration="1000"
            >
              ПРИМЕРЫ НАШИХ <br /> РАБОТ
            </p>
            <div className="">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-[20px]">
                <img
                  className="w-full rounded-[20px] h-[332px] object-cover"
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  src={image1}
                  alt=""
                />
                <img
                  className="w-full rounded-[20px] h-[332px] object-cover"
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  src={image2}
                  alt=""
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-[20px] my-[20px]">
                <img
                  className="w-full rounded-[20px] h-[332px] object-cover"
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  src={image3}
                  alt=""
                />
                <img
                  className="w-full rounded-[20px] h-[332px] object-cover"
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  src={image4}
                  alt=""
                />
                <img
                  className="w-full rounded-[20px] h-[332px] object-cover"
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  src={image5}
                  alt=""
                />
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-[20px]">
                <img
                  className="w-full rounded-[20px] h-[332px] object-cover"
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  src={image6}
                  alt=""
                />
                <img
                  className="w-full rounded-[20px] h-[332px] object-cover"
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  src={image7}
                  alt=""
                />
              </div>
            </div>
            <p
              className={`uppercase mt-20 md:mt-40 text-4xl mb-6 sm:text-5xl lg:text-8xl font-[Gerhaus]`} //${gerhaus.className}
            >
              ОТЗЫВЫ
            </p>
            <div className="justify-items-center gap-y-8 grid">
              <div className="lg:flex justify-center gap-x-72">
                <UserComment
                  description="Спасибо Crealine за великолепный дизайн! Наш дом преобразился, стал стильным и уютным благодаря вашим творениям."
                  image={asad}
                  name="АСАД"
                />
                <UserComment
                  description="Просто восхищены качеством и креативностью Crealine! Их мебель и аксессуары прекрасно вписались в наш интерьер."
                  image={bola}
                  name="АЛЕКСЕЙ"
                />
              </div>
              <UserComment
                description="Заказывали детскую от Crealine. Ребенок в восторге! Яркий, безопасный и очень функциональный дизайн, спасибо!"
                image={genadiy}
                name="ГЕНАДИЙ"
              />
              <div className="lg:flex justify-center gap-x-72">
                <UserComment
                  description="Мы выбрали Crealine для обновления гостиной и не пожалели! Элегантные и современные решения, превзошли все ожидания."
                  image={commentUser}
                  name="ИГОРЬ"
                />
                <UserComment
                  description="Очень довольны сотрудничеством с Crealine! Профессиональный подход, стильный дизайн и отличное качество продукции."
                  image={aleksey}
                  name="АЛЕКСЕЙ"
                />
              </div>
            </div>

            <p
              className={`uppercase mt-20 md:mt-40 text-4xl mb-6 sm:text-5xl lg:text-8xl font-[Gerhaus]`} //${gerhaus.className}
              data-aos="zoom-out-right"
              data-aos-duration="1000"
            >
              популярные <br /> вопросы
            </p>
            <AddQuestions />
          </div>

          <div
            className="relative"
            data-aos="zoom-out-right"
            data-aos-duration="1000"
          >
            <div className="max-container relative text-white justify-items-center grid pt-24">
              <p
                className={`uppercase max-xl:py-12 text-4xl mb-6 sm:text-5xl lg:text-8xl text-center font-[Gerhaus]`} // ${gerhaus.className}
              >
                отправьте <br className="max-xl:hidden" /> заявку
              </p>
              <p className={`text-center xl:mx-60 mt-[26px] font-[FuturaPT] text-2xl`}>
                Хотите превратить ваше пространство в шедевр дизайна? Оставьте
                заявку сейчас, и наши эксперты Crealine помогут воплотить ваши
                идеи в реальность!
              </p>
              <div className="max-xl:w-full grid xl:grid-cols-2 gap-10 mt-20 items-center">
                <input
                  type="text"
                  className="bg-inherit outline-none border-b w-full p-3 pl-1"
                  placeholder="ИМЯ"
                />
                <input
                  type="text"
                  className="bg-inherit outline-none border-b w-full p-3 pl-1"
                  placeholder="НОМЕР ТЕЛЕФОНА"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.3}
                stroke="currentColor"
                className="aspect-square w-24 md:w-52 mt-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-0 z-[-1] h-full w-full">
              <img
                className="w-full h-full object-bottom object-cover max-w-[1920px] mx-auto"
                src={sendReqSvg}
                alt="sendReqSvg"
              />
            </div>
          </div>

          <div className="in-container">
            <p
              className={` uppercase mt-20 md:mt-40 text-4xl mb-6 sm:text-5xl lg:text-8xl font-[Gerhaus]`} //${gerhaus.className}
            >
              КОНТАКТЫ
            </p>
            <div className="xl:flex grid gap-[21px] mb-[87px]">
              <div
                className="xl:w-[670px] flex flex-col"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <img
                  className="object-cover w-full rounded-[20px] mb-[10px]"
                  src={map}
                  alt=""
                />
                <ContactBox />
              </div>
              <Connection />
            </div>
          </div>
          <Footer />
        </main>
      </AnimatePresence>
    </>
  );
}
