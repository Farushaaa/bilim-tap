import { api } from "../api/http";

export class CommentsServices {
  static commentsUrl = "/comments";

  static getCommentsById = async (id: number) => {
    return api.get(`${CommentsServices.commentsUrl}?courseId=${id}`);
  };

  static updateCommentsById = async (
    id: number,
    name: string,
    review: string
  ) => {
    api.post(`${CommentsServices.commentsUrl}`, {
      courseId: id,
      author: name,
      review: review,
    });
  };
}
