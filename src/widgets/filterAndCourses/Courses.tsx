import { UseCoursesStore } from "../../store/CoursesStore";
import { Link } from "react-router-dom";

const Courses = () => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  const coursesArr = UseCoursesStore((state) => state.filteredArr);

  return (
    <div className="min-h-screen flex justify-center  w-[85%] mb-20 ">
      <div className="grid grid-cols-4 gap-7">
        {coursesArr.length !== 0 ? (
          coursesArr.map((course) => (
            <Link to={`/course/${course.id}`}>
              <div className="rounded-2xl bg-white shadow-2xl flex flex-col justify-between h-[435px] cursor-pointer transition transform hover:-translate-y-2 hover:shadow-3xl">
                <div>
                  <div className="relative h-35 my-2 mx-2">
                    <img
                      className="absolute w-full h-full object-cover rounded-2xl"
                      src={course.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col px-4 gap-3 mb-3">
                    <h1 className="text-[18px] font-semibold">
                      {course.title}
                    </h1>
                    <p className="text-[15px] text-gray-700">
                      {truncateText(course.description, 50)}
                    </p>
                    <div>
                      <div className="flex flex-row items-center gap-5 mt-2">
                        <p className="text-gray-500 text-[14px]">
                          от <span className="border-b-1">{course.author}</span>
                        </p>
                        <div className="flex flex-row px-1 justify-between rounded bg-gray-200">
                          <img
                            src="src/assets/starIcon.svg"
                            alt=""
                            className="mr-1 w-4"
                          />
                          <p className="text-[15px]">{course.rating}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-[14px]">
                          {course.studentsCompleted} участников{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 px-4 pb-4">
                  <p className="font-semibold text-[20px]">{course.price}</p>

                  <button className="flex flex-row items-center bg-purple-500 text-white text-[15px] font-medium w-fit rounded-2xl p-2 gap-2">
                    Перейти
                    <img
                      src="src/assets/RightArrowIcon.svg"
                      alt=""
                      className="w-[17px]"
                    />
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className=" absolute  w-[65%] right-0 mr-12 ">
            <img
              src="src\assets\EmptyBoxIcon.svg"
              alt="empty box"
              className="w-fit"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
