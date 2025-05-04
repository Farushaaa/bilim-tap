export type ICourses = ICourse[];

export interface ICourse {
  id: number;
  field: string;
  title: string;
  studentsCompleted: number;
  price: string;
  rating: number;
  author: string;
  description: string;
  releaseDate: string;
  link: string;
  image: string;
}

export type IComments = IComment[];

export interface IComment {
  id: number;
  courseId: number;
  author: string;
  review: string;
}

export interface ICourseDetailsProps {
  course?: ICourse;
}

export interface ICommentsProps {
  comments?: IComments;
}

export interface IAddCommentProps {
  id: string;
}
