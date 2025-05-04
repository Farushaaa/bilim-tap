import starIcon from "../assets/starIcon.svg";
import arrowIcon from "../assets/RightArrowIcon.svg";
import { FC } from "react";
import { ICourseDetailsProps } from "../interfaces/ICourses";
import { UseThemeStore } from "../store/ThemeStore";

const CourseDetails: FC<ICourseDetailsProps> = ({ course }) => {
  const isDark = UseThemeStore((state) => state.isDark);

  return (
    <div className={`${isDark ? "text-neutral-200" : ""}`}>
      <div className="flex justify-center mt-10 text-center">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-5xl font-semibold">{course?.title}</h1>
            <div className="flex flex-row items-center gap-5 mt-2">
              <p className="text-gray-500 text-[17px]">
                от <span className="border-b-1">{course?.author}</span>
              </p>
              <div className="flex flex-row px-1 justify-between rounded bg-white">
                <img src={starIcon} alt="" className="mr-1 w-4" />
                <p className="text-[15px]">{course?.rating}</p>
              </div>
            </div>
            <p className="text-[20px]">{course?.description}</p>
            <p className="text-2xl font-semibold">Цена: {course?.price}</p>
          </div>
          <div>
            <a href={course?.link} target="_blank" rel="noopener noreferrer">
              <button className="flex bg-purple-600 text-white rounded-2xl py-2 px-3 gap-2 cursor-pointer">
                Перейти на сайт
                <img src={arrowIcon} alt="" className="w-[18px]" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
