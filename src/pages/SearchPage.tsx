import { useEffect } from "react";
import { CoursesServices } from "../services/CoursesServices";
import FilterButtons from "../widgets/filterButtons/FilterButtons";
import Navbar from "../widgets/Navbar";
import SearchComponent from "../widgets/SearchComponent";
import { UseCoursesStore } from "../store/CoursesStore";
import FilteredCourses from "../widgets/filterAndCourses/FilteredCourses";
import { UseThemeStore } from "../store/ThemeStore";

const SearchPage = () => {
  const setCourses = UseCoursesStore((state) => state.setCourses);
  const isDark = UseThemeStore((state) => state.isDark);
  const handleGetcourses = async () => {
    try {
      const { data } = await CoursesServices.getCourses();
      setCourses(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetcourses();
  });

  return (
    <div
      className={`border min-h-screen duration-300 ${
        isDark ? "bg-darkMode" : ""
      }`}
    >
      <Navbar />
      <SearchComponent />
      <FilterButtons />
      <FilteredCourses />
    </div>
  );
};

export default SearchPage;
