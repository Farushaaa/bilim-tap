import { create } from "zustand";
import { ICourse } from "../interfaces/ICourses";
import { persist } from "zustand/middleware";

interface ICoursesStore {
  courses: ICourse[];
  setCourses: (arr: ICourse[]) => void;
  filteredArr: ICourse[];
  searchCourses: (item: string) => void;
  isSearching: boolean;
  toggleSearching: () => void;
  filterCourses: (item: string) => void;
}

export const UseCoursesStore = create<ICoursesStore>()(
  persist(
    (set, get) => ({
      courses: [],
      filteredArr: [],
      isSearching: false,
      toggleSearching: () =>
        set((state) => ({
          isSearching: !state.isSearching,
        })),
      setCourses: (arr) => set({ courses: arr, filteredArr: arr }),
      searchCourses: (item: string) =>
        set((state) => ({
          filteredArr: state.courses.filter(
            (course) =>
              course.field.toLowerCase().includes(item.toLowerCase()) ||
              course.author.toLowerCase().includes(item.toLowerCase()) ||
              course.description.toLowerCase().includes(item.toLowerCase())
          ),
        })),
      filterCourses: (item: string) => {
        const coursesStore = get();
        let tempFilteredArr = <ICourse[]>[];
        console.log("All courses:", coursesStore.courses);

        if (item === "С наивысшим рейтингом") {
          tempFilteredArr = coursesStore.courses.filter(
            (course) => course.rating >= 4.7
          );
        } else if (item === "Все курсы") {
          tempFilteredArr = coursesStore.courses;
        } else if (item === "С наивысшим количеством участников") {
          tempFilteredArr = coursesStore.courses.filter(
            (course) => course.studentsCompleted >= 20000
          );
        }
        console.log("Filtered result:", tempFilteredArr);
        set({
          filteredArr: tempFilteredArr,
        });
      },
    }),
    {
      name: "course-storage",
    }
  )
);
