import { Link } from "react-router-dom";
import { UseThemeStore } from "../store/ThemeStore";

const HeroSection = () => {
  const isDark = UseThemeStore((state) => state.isDark);
  return (
    <div
      className={`flex flex-row justify-around mt-15 h-full ${
        isDark ? `text-white` : ""
      } `}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-[55px] leading-13 font-bold w-[580px]">
          Первый агрегатор курсов в Казахстане
        </h1>
        <p
          className={`text-grayDefault w-[400px] text-[20px] ${
            isDark ? "text-neutral-200" : ""
          }`}
        >
          Мы собираем лучшие образовательные курсы для вашего развития в одном
          месте!
        </p>
        <Link to="/search">
          <button className="flex items-center cursor-pointer  p-3 rounded-2xl bg-purpleDefault text-white w-fit font-bold">
            Начать поиск{" "}
            <img
              src="src\assets\RightArrowIcon.svg"
              className="w-[20px] ml-3"
              alt=""
            />
          </button>
        </Link>
      </div>
      <div>
        <img
          className="w-[570px]"
          src="src\assets\Programmer 1.svg"
          alt="programmer illustration"
        />
      </div>
    </div>
  );
};

export default HeroSection;
