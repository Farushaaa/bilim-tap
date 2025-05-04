//import { IComment } from './../interfaces/ICourses';
import { api } from "../api/http";
import { ICourse, ICourses } from "../interfaces/ICourses";

export class CoursesServices {
  static coursesUrl = "/courses";
  static getCourses = async () => {
    return api.get<ICourses>(`${CoursesServices.coursesUrl}`);
  };

  static filterCourses = async (filter: string | number) => {
    return api.get<ICourses>(
      `${CoursesServices.coursesUrl}?${filter}=${filter}`
    );
  };

  static getCourseById = async (id: number) => {
    return api.get<ICourse>(`${CoursesServices.coursesUrl}/${id}`);
  };
}
