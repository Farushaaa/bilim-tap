import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IComments, ICourse } from "../interfaces/ICourses";
import { CoursesServices } from "../services/CoursesServices";
import Navbar from "../widgets/Navbar";
import CourseDetails from "../widgets/CourseDetails";
import CourseComments from "../widgets/CourseComments";
import { CommentsServices } from "../services/CommentsServices";
import AddCommentForm from "../widgets/AddCommentForm";
import { UseThemeStore } from "../store/ThemeStore";

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<ICourse>();
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<IComments>();
  const isDark = UseThemeStore((state) => state.isDark);

  useEffect(() => {
    const courseId = id;
    const getCourses = async () => {
      setIsLoading(true);
      try {
        const { data } = await CoursesServices.getCourseById(Number(courseId));
        console.log(data);
        setCourse(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCourses();
  }, [id]);

  useEffect(() => {
    const courseId = id;
    const getComments = async () => {
      setIsLoading(true);
      try {
        const { data } = await CommentsServices.getCommentsById(
          Number(courseId)
        );
        setComments(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getComments();
  }, [id]);

  return (
    <div className={`min-h-screen duration-300 ${isDark ? "bg-darkMode" : ""}`}>
      <Navbar />
      {isLoading ? (
        <h1
          className={`flex justify-center text-2xl font-bold ${
            isDark ? "text-neutral-300" : ""
          }`}
        >
          Data is loading
        </h1>
      ) : (
        <div
          className={`min-h-screen  border-b-1 duration-300 ${
            isDark ? "bg-darkMode" : ""
          }`}
        >
          <CourseDetails course={course} />
          <CourseComments comments={comments} />
          <AddCommentForm id={id!} />
        </div>
      )}
    </div>
  );
};

export default CoursePage;
