import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { singleQuestion } from 'src/interfaces/singlequestion/singleQuestion';
import { singleQuestionNewAnswer } from 'src/interfaces/singlequestion/NewAnswer';
import { singleQuestionAnswer } from 'src/interfaces/singlequestion/singleQuestionAnswer';
import { postAnswerResponse } from 'src/interfaces/singlequestion/postAnswerResponse';
import { upVoteAnswerResponse } from 'src/interfaces/singlequestion/upVoteAnswerResponse';
import { downVoteAnswerResponse } from 'src/interfaces/singlequestion/downVoteAnswerResponse';


@Injectable({
  providedIn: 'root'
})
export class singleQuestionService {
  private apiUrl = 'http://localhost:4000'; 

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  postAnswer(questionId: string, answer: singleQuestionNewAnswer): Observable<postAnswerResponse> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<postAnswerResponse>(`${this.apiUrl}/answers/${questionId}`, answer, { headers });
  }

  upvoteAnswer(answerId: string): Observable<upVoteAnswerResponse> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<upVoteAnswerResponse>(`${this.apiUrl}/votes/upvote/${answerId}`, null, { headers });
  }

  downvoteAnswer(answerId: string): Observable<downVoteAnswerResponse> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<downVoteAnswerResponse>(`${this.apiUrl}/votes/downvote/${answerId}`, null, { headers });
  }

  getAllAnswers(): Observable<singleQuestionAnswer[]> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<singleQuestionAnswer[]>(`${this.apiUrl}/answers`, { headers });
  }
}
