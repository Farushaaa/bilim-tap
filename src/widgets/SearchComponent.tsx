import { useState } from "react";
import { UseCoursesStore } from "../store/CoursesStore";

const SearchComponent = () => {
  const [searchItem, setSearchItem] = useState("");

  const searchFunction = UseCoursesStore((state) => state.searchCourses);
  const handleSearch = (item: string) => {
    searchFunction(item);
    setSearchItem("");
  };
  // isTyping => filtered array if not typing return coursesArr
  return (
    <div>
      <div className="flex justify-center mt-8 items-center">
        <div className=" rounded-2xl bg-white flex flex-row p-3 w-[70%]">
          <img
            src="src\assets\SearchIcon.svg"
            alt=""
            className="w-[20px] mr-1"
          />
          <input
            className=" w-full text-[15px] p-2"
            value={searchItem}
            type="text"
            placeholder="Находите интересующие вас курсы по теме, направлению или преподавателю"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        <button
          className="ml-5 text-white font-semibold text-[15px] h-fit p-2 bg-purple-500 rounded-2xl"
          onClick={() => handleSearch(searchItem)}
        >
          Искать
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
