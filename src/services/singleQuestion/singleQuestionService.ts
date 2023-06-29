import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getAnswerByQuestionId } from 'src/interfaces/singlequestion/getAnswerByQuestionIdResponse';
import {  postAnswerRequest } from 'src/interfaces/singlequestion/postAnswer';
import { postAnswerResponse } from 'src/interfaces/singlequestion/postAnswerResponse';

@Injectable({
  providedIn: 'root',
})
export class SingleQuestionService {
  private baseUrl = 'http://localhost:4000';
  // private questionsEndpoint = `${this.baseUrl}/questions`;
  private answersEndpoint = `${this.baseUrl}/answers`;

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }


  // Get answers by question ID
  getAnswersByQuestionId(questionId: string,token:string): Observable<getAnswerByQuestionId[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token || ''
    });

    const url = `${this.answersEndpoint}/question/${questionId}`;
    return this.http.get<getAnswerByQuestionId[]>(url,{headers});
  }

  // Post an answer to a question
  postAnswer(questionId: string, answer: postAnswerRequest,token:string): Observable<postAnswerResponse> {
    const url = `${this.answersEndpoint}/${questionId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token || ''
    });


    return this.http.post<postAnswerResponse>(url, answer, { headers }).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
