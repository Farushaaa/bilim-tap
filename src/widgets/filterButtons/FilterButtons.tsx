import { UseCoursesStore } from "../../store/CoursesStore";
import { UseThemeStore } from "../../store/ThemeStore";

import ToSortBtn from "./ToSortBtn";

const FilterButtons = () => {
  const coursesArr = UseCoursesStore((state) => state.filteredArr);
  const isDark = UseThemeStore((state) => state.isDark);
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row px-10 py-7">
        <ToSortBtn />
      </div>

      <p
        className={`mr-10 text-[15px] text-gray-500 ${
          isDark ? "text-neutral-200" : ""
        }`}
      >
        {coursesArr.length !== 0
          ? `${coursesArr.length} результата`
          : "По данному поиску курсов не найдено"}
      </p>
    </div>
  );
};

export default FilterButtons;
