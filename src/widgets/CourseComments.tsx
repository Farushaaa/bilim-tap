import { FC } from "react";
import { ICommentsProps } from "../interfaces/ICourses";
import { UseThemeStore } from "../store/ThemeStore";

const CourseComments: FC<ICommentsProps> = ({ comments }) => {
  const isDark = UseThemeStore((state) => state.isDark);

  return (
    <div>
      <div className="flex flex-col justify-center items-center m-auto gap-3 w-[70%] mt-20 mb-20 ">
        <div className="w-full">
          <p
            className={`text-2xl text-center ${
              isDark ? "text-neutral-200" : ""
            }`}
          >
            Отзывы студентов: {comments?.length}
          </p>
          <div className="grid grid-cols-2 justify-center gap-5 mt-8">
            {comments?.map((commentItem) => (
              <div
                key={commentItem.id}
                className=" w-fit flex py-3 mx-auto px-5 bg-white rounded-2xl"
              >
                <div>
                  <p className="text-[20px] font-medium">
                    {commentItem.author}
                  </p>
                  <p className="w-[340px] text-gray-500 font-light text-[15px]">
                    {commentItem.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComments;
