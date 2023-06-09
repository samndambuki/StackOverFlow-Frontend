import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowUp, faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-singlequestion',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './singlequestion.component.html',
  styleUrls: ['./singlequestion.component.css']
})
export class SinglequestionComponent {
  searchicon = faSearch;
  upIcon = faCaretUp
  downIcon = faCaretDown
}
