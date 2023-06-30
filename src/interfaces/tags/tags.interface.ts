import { Question } from '../ask question/question.interface';

export interface Tag {
  question: Question;
  tagId: string;
  tagName: string;
  isDeleted: number;
}
