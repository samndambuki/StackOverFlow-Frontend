import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//it can be injected as a dependency
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  //base url of my api
  // private questionsURL = 'http://localhost:3000';

  //testing url
  private questionsURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  createQuestion(questionData: any) {
    return this.http.post(this.questionsURL, questionData);
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
