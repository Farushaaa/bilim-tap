import { FC, useState } from "react";
import { CommentsServices } from "../services/CommentsServices";
import PlusIcon from "../assets/PlusIcon.svg";
import reviewIllustration from "../assets/ReviewIllustration.svg";
import { IAddCommentProps } from "../interfaces/ICourses";
import { UseThemeStore } from "../store/ThemeStore";

const AddCommentForm: FC<IAddCommentProps> = ({ id }) => {
  const isDark = UseThemeStore((state) => state.isDark);
  const [author, setAuthor] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const addCommentBtn = () => {
    CommentsServices.updateCommentsById(Number(id), author, review);
  };

  return (
    <div className={`mb-10`}>
      <p
        className={`text-center text-4xl font-semibold ${
          isDark ? "text-neutral-200" : ""
        }`}
      >
        Уже прошли данный курс?
      </p>
      <div className=" flex flex-row justify-around bg-white mt-5 items-center  py-10">
        <div className="flex flex-col  gap-7">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-medium">Поделитесь своим опытом</h1>
            <input
              type="text"
              placeholder="Введите ваше ФИО"
              className="rounded-2xl bg-gray-200 p-2 w-[350px]"
              onChange={(e) => setAuthor(e.target.value)}
            />

            <input
              type="text"
              placeholder="Добавьте ваш отзыв"
              className="rounded-2xl bg-gray-200 p-2 w-[350px] h-[150px]"
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <button
            onClick={addCommentBtn}
            className="cursor-pointer border w-fit p-2 rounded-2xl bg-black text-white flex flex-row gap-2"
          >
            Добавить <img src={PlusIcon} alt="" className="w-[17px]" />
          </button>
        </div>

        <div>
          <img src={reviewIllustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddCommentForm;
