import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsURL = 'http://localhost:3000/api/questions';
  
  constructor(private http:HttpClient) { }

  createQuestion(questionData:any){
    return this.http.post(this.questionsURL,questionData)
  }

}
