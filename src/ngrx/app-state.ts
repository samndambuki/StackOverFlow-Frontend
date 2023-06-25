import { AuthState } from "src/interfaces/authenticate/AuthState";
import { GetQuestionsState } from "src/interfaces/getquestions/get-questions.state.";
import { QuestionState } from "src/interfaces/ask question/questionState";

export interface AppState {
  auth: AuthState;
  question:QuestionState;
  getQuestions: GetQuestionsState;
}
