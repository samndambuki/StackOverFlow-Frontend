import { AuthState } from "src/interfaces/authenticate/AuthState";
import { QuestionState } from "./getQuestions/question.reducer";

export interface AppState {
  auth: AuthState;
  question:QuestionState;
}
