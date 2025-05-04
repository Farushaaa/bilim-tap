//import { useFilterSidebar } from "../../store/SidebarOpening";
//import FilterSidebar from "../FilterSidebar";
import Courses from "./Courses";

const FilteredCourses = () => {
  // const isSidebarOpen = useFilterSidebar((state) => state.isOpen);
  return (
    <div>
      <div className="flex flex-row justify-around">
        <Courses />
      </div>
    </div>
  );
};

export default FilteredCourses;
