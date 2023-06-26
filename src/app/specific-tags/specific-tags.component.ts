import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from 'src/interfaces/ask question/question.interface';
import { TagsService } from 'src/services/tags/tags.service';

@Component({
  selector: 'app-specific-tags',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterLink],
  templateUrl: './specific-tags.component.html',
  styleUrls: ['./specific-tags.component.css']
})
export class SpecificTagsComponent implements OnInit {
  //imported search cion from font awesome module
  searchicon = faSearch

  selectedTagId!: string;
   questions$!: Observable<Question[]>;


  constructor(private router:Router,private route: ActivatedRoute,private tagsService: TagsService){}

  ngOnInit(): void {
    this.selectedTagId = this.route.snapshot.paramMap.get('tagId')!;
    console.log(this.selectedTagId)
    this.questions$ = this.tagsService.getQuestionsByTag(this.selectedTagId);
    this.tagsService.getQuestionsByTag(this.selectedTagId).subscribe(response=>{
      console.log(response);
      
    })
  }

  //method to handle a specific question clicked
  onSingleQuestionClicked(){
    this.router.navigate(['singlequestion'])
  }



  //method to handle ask question click event
  onAskQuestionClicked(){
    this.router.navigate(['askquestion'])
  }

  //method to handle hoeme button click event
  onHomeButtonClicked(){
    this.router.navigate(['home'])
  }

  //method to handle tags button click event
  onTagsButtonClicked(){
    this.router.navigate(['tags'])
  }

  //method to handle my questions button click event
  onMyQuestionButtonClicked(){
    this.router.navigate(['myquestions'])
  }
}
