import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-my-questions',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.css']
})
export class MyQuestionsComponent {
  searchicon = faSearch;

}
