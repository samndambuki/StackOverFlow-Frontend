export interface AdminViewAllQuestions {
  questionId: string;
  userId: string;
  title: string;
  details: string;
  tried: string;
  tags: string;
  createdAt: string;
  updatedAt: string | null;
  isDeleted: number;
  userName: string;
}
