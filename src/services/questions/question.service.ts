import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { Question } from 'src/interfaces/ask question/question.interface';
import { QuestionResponse } from 'src/interfaces/ask question/questionResponse';
import { GetQuestions } from 'src/interfaces/getquestions/getQuestions.iterface';
import { DecodedToken } from 'src/interfaces/myquestion/DecodedToken';
import { AppState } from 'src/ngrx/app-state';
import jwt_decode from 'jwt-decode';

//it can be injected as a dependency
@Injectable({
  providedIn: 'root',
})
export class QuestionService {

  //base url of my api
  private questionsURL = 'http://localhost:4000/questions';

  constructor(private http: HttpClient,private store: Store<AppState>) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  askQuestion(question: Question, token: string): Observable<QuestionResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token || ''
    });

    return this.http.post<QuestionResponse>(this.questionsURL, question, { headers });
  }


  getQuestions(): Observable<GetQuestions[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: this.getToken() || '',
    });

     return this.http.get<GetQuestions[]>(this.questionsURL, { headers }).pipe(
    tap((response) => {
      // console.log(response);
    }),
    catchError((error) => {
      return throwError(error);
    })
  );
}

getQuestionsByUser(): Observable<GetQuestions[]> {
  const token = this.getToken();
  const userId = token ? this.extractUserIdFromToken(token) : '';

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    token: this.getToken() || '',
  });

  return this.http.get<GetQuestions[]>(this.questionsURL, { headers }).pipe(
    map((questions) => questions.filter((question) => question.userId === userId)),
    tap((filteredQuestions) => {
      // Log the filtered questions
      console.log(filteredQuestions);
    }),
    catchError((error) => {
      return throwError(error);
    })
  );
}

updateQuestion(questionId: string, updatedQuestion: Question): Observable<QuestionResponse> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    token: this.getToken() || ''
  });

  const url = `${this.questionsURL}/${questionId}`;

  return this.http.put<QuestionResponse>(url, updatedQuestion, { headers });
}

getQuestionById(questionId: string): Observable<Question> {
  return this.http.get<Question>(`${this.questionsURL}/questions/${questionId}`);
}


private extractUserIdFromToken(token: string): string {
  const decodedToken: DecodedToken = jwt_decode(token) as DecodedToken;
  return decodedToken.userId;
}

}



