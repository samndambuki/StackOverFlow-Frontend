import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/interfaces/question/question.interface';
import { QuestionResponse } from 'src/interfaces/question/questionResponse';

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


  //method - construct url for retrieving questions
  getQuestions(): Observable<any[]> {
    const url = `${this.questionsURL}`;
    //response is an array of any type
    return this.http.get<any[]>(url);
  }

  //method - construct url for deleteing a specific question
  //observable to represent http response
  //component that uses the service will subscribe to this observable
  deleteQuestion(questionId: string): Observable<any> {
    //real url 
    // const url = `${this.questionsURL}/${questionId}`;

    //testing url
    const url = `https://jsonplaceholder.typicode.com/posts/${questionId}`;

    //delete request - response type is any
    return this.http.delete<any>(url);
  }
}
