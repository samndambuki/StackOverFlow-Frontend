import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionService } from 'src/services/questions/question.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Question } from 'src/interfaces/ask question/question.interface';

@Component({
  selector: 'app-admin-view-all-questions',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule,RouterModule],
  templateUrl: './admin-view-all-questions.component.html',
  styleUrls: ['./admin-view-all-questions.component.css'],
})
export class AdminViewAllQuestionsComponent {
  //declared search icon imported from font awesome icons
  searchicon = faSearch;

  //holds fetched questions
  questions: Question[] = [];

  //pagination logic
  currentPage:number = 1
  itemsPerPage:number = 3

  //injected the service and http client
  constructor(
    private questionService: QuestionService,
    private http: HttpClient,
    private router:Router
  ) {}

  //fetches questions when the component is initialized
  ngOnInit() {
    this.getQuestions();
  }

  //method to get questions
  getQuestions() {

    const startIndex = (this.currentPage -1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage

    //makes http request to backend
    //subscries to response using subscribe method
    // this.questionService.getQuestions().subscribe(
    //   (response: any[]) => {
    //     this.questions = response.slice(startIndex, endIndex)
    //   },
    //   (error) => {
    //     console.log('Eror fetching questions', error);
    //   }
    // );
  }

  // deleteQuestion(questionId: string) {
  //   this.questionService.deleteQuestion(questionId).subscribe(
  //     (response) => {
  //       //updates question array by filtering out the deleted question if request is successful
  //       this.questions = this.questions.filter(
  //         (question) => question.id !== questionId
  //       );
  //     },
  //     (error) => {
  //       console.log('Error deleting question', error);
  //     }
  //   );
  // }

  //calculates total number of questions based on number of questions and items per page
  getTotalPages(): number[] {
    const totalPages = Math.ceil(this.questions.length / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  

  //loads the questions for the selected pages
  goToPage(page: number) {
    this.currentPage = page;
  }

  //method to navigate to users 
  onUserButtonClicked(){
    this.router.navigate(['adminseesallusers'])
  }

  onHomeButtonCicked(){
    this.router.navigate(['home'])
  }

}
