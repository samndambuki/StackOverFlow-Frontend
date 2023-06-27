export interface singleQuestionAnswer{
   answerId: string;
   userId: string;
   questionId: string;
   body: string;
   isDeleted: number;
   isPreferred: number;
   createdAt: string;
   updatedAt: string | null;
   isPreferredEmailSent: number;
   upvotes:number;
   downvotes:number;
   userName: string;
}