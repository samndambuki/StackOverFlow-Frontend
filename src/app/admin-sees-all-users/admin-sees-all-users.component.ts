import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-admin-sees-all-users',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './admin-sees-all-users.component.html',
  styleUrls: ['./admin-sees-all-users.component.css']
})
export class AdminSeesAllUsersComponent {
  searchicon = faSearch
}
