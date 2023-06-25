import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/interfaces/tags/tags.interface';


@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private apiUrl = 'http://localhost:4000/tags';

  constructor(private http: HttpClient) {}

  addTag(tagName: string, token: string): Observable<{ message: string; tagId: string }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: token,
    });

    const body: { tagName: string } = {
      tagName: tagName,
    };

    return this.http.post<{ message: string; tagId: string }>(this.apiUrl, body, { headers: headers });
  }

  getTags(token: string): Observable<Tag[]> {
    const headers = new HttpHeaders({
      token: token,
    });

    return this.http.get<Tag[]>(this.apiUrl, { headers: headers });
  }
  
}
