export interface getAnswerByQuestionId {
  answerId: string;
  userId: string;
  questionId: string;
  body: string;
  isDeleted: number;
  isPreferred: number;
  createdAt: string;
  updatedAt: string | null;
  isPreferredEmailSent: number;
  upvotes: number | null;
  downvotes: number | null;
  userName: string;
}
