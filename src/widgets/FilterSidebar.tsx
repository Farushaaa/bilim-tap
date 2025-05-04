import { useFilters } from "../store/FiltersStrore";

const FilterSidebar = () => {
  const filters = useFilters((state) => state.filtersArr);

  return (
    <div className="bg-white rounded-2xl p-2 absolute left-0 ml-10 w-[20%]">
      {filters.map((filter) => (
        <div
          className="flex flex-col gap-3  p-3 border-b-1 border-gray-300"
          key={filter.id}
        >
          <div className="flex flex-row justify-between">
            <p className="text-[18px] font-semibold">{filter.filterTitle}</p>
            <img className="w-[18px]" src="src\assets\ExitIcon.svg" alt="" />
          </div>
          <div className="flex flex-col gap-1">
            {filter.filterItems.map((item) => (
              <div className="flex flex-row " key={item.id}>
                <input type="checkbox" defaultChecked />
                <p className="ml-3 text-[14px] font-medium">
                  {item.filterDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="border mt-5 p-2 ml-2 mb-3 bg-purple-400 rounded-2xl text-white text-[15px] font-semibold">
        Искать
      </button>
    </div>
  );
};

export default FilterSidebar;
