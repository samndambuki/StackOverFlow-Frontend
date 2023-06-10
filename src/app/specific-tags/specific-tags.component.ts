import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-specific-tags',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './specific-tags.component.html',
  styleUrls: ['./specific-tags.component.css']
})
export class SpecificTagsComponent {
  searchicon = faSearch
}
