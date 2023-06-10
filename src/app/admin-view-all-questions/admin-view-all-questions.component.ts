import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-admin-view-all-questions',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './admin-view-all-questions.component.html',
  styleUrls: ['./admin-view-all-questions.component.css']
})
export class AdminViewAllQuestionsComponent {
  searchicon = faSearch
}
