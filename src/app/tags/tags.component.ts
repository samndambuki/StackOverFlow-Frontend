import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from 'src/interfaces/tags/tags.interface';
import { AppState } from 'src/ngrx/app-state';
import { Store } from '@ngrx/store';
import { addTag, loadTags } from 'src/ngrx/tags/tags.actions';
import {
  selectError,
  selectLoading,
  selectTags,
} from 'src/ngrx/tags/tags.selectors';
import { Question } from 'src/interfaces/ask question/question.interface';
import { TagsService } from 'src/services/tags/tags.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  //serach icon imported from font awesome icons
  searchicon = faSearch;

  tags: Tag[] = [];
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  selectedQuestion: Question[] = [];

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private tagsService: TagsService
  ) {}

  //method to handle home button click event
  onHomeButtonClicked() {
    this.router.navigate(['home']);
  }

  //method to handle my questions button click event
  onMyQuestionsButtonClicked() {
    this.router.navigate(['myquestions']);
  }

  //method to handle specific tags clicked
  onSpecificTagClicked(tagId: string) {
    this.router.navigate(['specifictags', tagId]);
    console.log('Clicked on tag with ID:', tagId);

    this.tagsService.getQuestionsByTag(tagId).subscribe(
      (questions) => {
        console.log(questions);

        this.selectedQuestion = questions;
      },
      (error) => {
        console.error('Error getting question details:', error);
      }
    );
  }

  //method to handle my profile click event
  onMyProfileButtonClicked() {
    this.router.navigate(['userprofile']);
  }

  ngOnInit() {
    this.store.dispatch(loadTags());
    this.store.select(selectTags).subscribe((response) => {
      console.log(response);
      this.tags = response;
    });

    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  addTag(tagName: string) {
    this.store.dispatch(addTag({ tagName: tagName }));
  }
}
