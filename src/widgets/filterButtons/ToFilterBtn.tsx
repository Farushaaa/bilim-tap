import { useFilterSidebar } from "../../store/SidebarOpening";

const ToFilterBtn = () => {
  const handleFilterSidebar = useFilterSidebar((state) => state.handleSidebar);
  return (
    <div>
      <button
        onClick={handleFilterSidebar}
        className="flex flex-row  p-3 bg-white rounded-2xl hover:bg-gray-100 transition items-center cursor-pointer"
      >
        <img src="src\assets\FilterIcon.svg" alt="" className="mr-2 " />
        Фильтровать
      </button>
    </div>
  );
};

export default ToFilterBtn;
