import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Question } from 'src/interfaces/ask question/question.interface';
import { Tag } from 'src/interfaces/tags/tags.interface';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private apiUrl = 'http://localhost:4000/tags';

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  addTag(tagName: string): Observable<{ message: string; tagId: string }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: this.getToken() || '',
    });

    const body: { tagName: string } = {
      tagName: tagName,
    };

    return this.http
      .post<{ message: string; tagId: string }>(this.apiUrl, body, { headers })
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  getTags(): Observable<Tag[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: this.getToken() || '',
    });

    return this.http.get<Tag[]>(this.apiUrl, { headers }).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getQuestionsByTag(tagId: string): Observable<Question[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: this.getToken() || '',
    });

    const url = `${this.apiUrl}/${tagId}/questions`;

    return this.http.get<Question[]>(url, { headers }).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
