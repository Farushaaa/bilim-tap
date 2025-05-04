import { useEffect, useState } from "react";
import { useFilters } from "../../store/FiltersStrore";
import { UseCoursesStore } from "../../store/CoursesStore";

const ToSortBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<string>("Все курсы");
  const { filtersArr, handleCurrentFilter } = useFilters();
  const filterCourses = UseCoursesStore((state) => state.filterCourses);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFilter = (id: number) => {
    handleCurrentFilter(id);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const currentFilter = filtersArr.find(
      (filterItem) => filterItem.isCurrent === true
    );
    if (currentFilter) {
      setCurrentFilter(currentFilter.filterTitle);
      filterCourses(currentFilter.filterTitle);
    }
  }, [filtersArr]);

  return (
    <div className=" flex flex-col p-3 ">
      <div className=" rounded-2xl bg-white">
        <div className=" flex flex-row w-[250px] p-3 justify-between rounded-2xl cursor-pointer items-center hover:bg-gray-100 transition ">
          <p className="text-[14px]">
            Фильтровать по:{" "}
            <span className="font-bold text-[12px]">{currentFilter}</span>{" "}
          </p>
          <button onClick={handleToggle} className="cursor-pointer">
            <img
              src="src\assets\DropdownIcon.svg"
              className={`ml-2 w-[12px] transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              alt=""
            />
          </button>
        </div>
        {isOpen ? (
          <div className="flex flex-col px-3 w-[250px] gap-2 mb-4   ">
            {filtersArr.map((filter) => (
              <div className={`flex flex-row justify-between  `}>
                <p
                  className={`text-[13px] font-semibold cursor-pointer ${
                    filter.isCurrent ? "text-purple-600" : ""
                  }`}
                  key={filter.id}
                  onClick={() => handleFilter(filter.id)}
                >
                  {filter.filterTitle}
                </p>
                {filter.isCurrent ? (
                  <img
                    src="src\assets\tickIcon.svg"
                    alt=""
                    className="w-[15px]"
                  />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ToSortBtn;
