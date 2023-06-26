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
import { AuthGuardService } from 'src/services/guards/AuthGuard.service';


const routes: Routes = [
  {path:'',component:LandingpageComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate: [AuthGuardService]},
  {path:'askquestion',component:AskquestionComponent, canActivate: [AuthGuardService] },
  {path:'singlequestion',component:SinglequestionComponent, canActivate: [AuthGuardService] },
  {path:'userprofile',component:UserProfileComponent, canActivate: [AuthGuardService] },
  {path:'myquestions',component:MyQuestionsComponent, canActivate: [AuthGuardService] },
  {path:'updatequestion',component:UpdateQuestionComponent, canActivate: [AuthGuardService] },
  {path:'admin',component:AdminComponent, canActivate: [AuthGuardService] },
  {path:'adminseesallusers',component:AdminSeesAllUsersComponent, canActivate: [AuthGuardService] },
  {path:'adminviewallquestions',component:AdminViewAllQuestionsComponent, canActivate: [AuthGuardService] },
  {path:'tags',component:TagsComponent, canActivate: [AuthGuardService] },
  {path:'specifictags/:tagId',component:SpecificTagsComponent, canActivate: [AuthGuardService] },
  //wild card route to match any route that doesnt match any of the defined routes
  {path:'**',component:LandingpageComponent}
];

@NgModule({
  providers:[AuthGuardService],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
