import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { SinglequestionComponent } from './singlequestion/singlequestion.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSeesAllUsersComponent } from './admin-sees-all-users/admin-sees-all-users.component';
import { AdminViewAllQuestionsComponent } from './admin-view-all-questions/admin-view-all-questions.component';
import { TagsComponent } from './tags/tags.component';
import { SpecificTagsComponent } from './specific-tags/specific-tags.component';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'askquestion',component:AskquestionComponent},
  {path:'singlequestion',component:SinglequestionComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path:'myquestions',component:MyQuestionsComponent},
  {path:'updatequestion',component:UpdateQuestionComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminseesallusers',component:AdminSeesAllUsersComponent},
  {path:'adminviewallquestions',component:AdminViewAllQuestionsComponent},
  {path:'tags',component:TagsComponent},
  {path:'specifictags',component:SpecificTagsComponent},
  {path:'allusers',component:AllUsersComponent},
  //wild card route to match any route that doesnt match any of the defined routes
  {path:'**',component:LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
