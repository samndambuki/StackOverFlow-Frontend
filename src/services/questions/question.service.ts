import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { Question } from 'src/interfaces/ask question/question.interface';
import { QuestionResponse } from 'src/interfaces/ask question/questionResponse';
import { GetQuestions } from 'src/interfaces/getquestions/getQuestions.iterface';

//it can be injected as a dependency
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  //base url of my api
  // private questionsURL = 'http://localhost:3000';

  //testing url
  private questionsURL = 'http://localhost:4000/questions';

  constructor(private http: HttpClient) {}

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
      // console.log(response); // Log the response data
    }),
    catchError((error) => {
      // Handle error if needed
      return throwError(error);
    })
  );
}

}
