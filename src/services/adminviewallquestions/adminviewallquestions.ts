import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminViewAllQuestions } from 'src/interfaces/adminviewallquestions/adminviewallquestions';


@Injectable({
  providedIn: 'root'
})
export class AdminViewAllQuestionsService {
  private questionsURL = 'http://localhost:4000/questions'; 

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<AdminViewAllQuestions[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: this.getToken() || '',
    });

    return this.http.get<AdminViewAllQuestions[]>(this.questionsURL, { headers });
  }

  deleteQuestion(questionId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: this.getToken() || '',
    });

    const deleteURL = `${this.questionsURL}/${questionId}`;

    return this.http.delete(deleteURL, { headers });
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  
}
