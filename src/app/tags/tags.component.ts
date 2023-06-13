import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  //serach icon imported from font awesome icons
  searchicon = faSearch

  constructor(private router:Router){}

  //method to handle home button click event
  onHomeButtonClicked(){
    this.router.navigate(['home'])
  }

  //method to handle my questions button click event
  onMyQuestionsButtonClicked(){
    this.router.navigate(['myquestions'])
  }

  //method to handle specific tags clicked
  onSpecificTagClicked(){
    this.router.navigate(['specifictags'])
  }

  //method to handle my profile click event
  onMyProfileButtonClicked(){
    this.router.navigate(['userprofile'])
  }


}
