import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { GetQuestionsResponse } from 'src/interfaces/getquestions/getQuestionsResponse';

@Injectable()
@Pipe({
  name: 'search',
  standalone:true
})

export class SearchPipe implements PipeTransform {

  transform(questions: GetQuestionsResponse[], searchTerm: string): GetQuestionsResponse[] {

    if (!searchTerm || searchTerm.trim() === '') {
      return questions;
    }

    searchTerm = searchTerm.toLowerCase();

    return questions.filter((question: GetQuestionsResponse) => {
      return (
        question.title.toLowerCase().includes(searchTerm)
      );
    });
  }
}
