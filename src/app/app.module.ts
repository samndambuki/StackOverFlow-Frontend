import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingpageComponent,
    FontAwesomeModule,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AskquestionComponent,
    SinglequestionComponent,
    UserProfileComponent,
    MyQuestionsComponent,
    UpdateQuestionComponent,
    AdminComponent,
    AdminSeesAllUsersComponent,
    AdminViewAllQuestionsComponent,
    TagsComponent,
    SpecificTagsComponent,
    AllUsersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
