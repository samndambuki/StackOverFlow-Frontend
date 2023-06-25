import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from 'src/services/questions/question.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticateService } from 'src/services/authenticate/authenticate.service';
import { AuthGuardService } from 'src/services/guards/AuthGuard.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/ngrx/auth/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/ngrx/auth/auth.effects';
import { Router } from '@angular/router';
import { QuestionEffects } from 'src/ngrx/askquestion/question.effects';
import { questionReducer } from 'src/ngrx/askquestion/question.reducer';
import { getQuestionsReducer } from 'src/ngrx/getQuestions/get-questions.reducer';
import { GetQuestionsEffects } from 'src/ngrx/getQuestions/get-questions.effects';
import { MyQuestionsEffects } from 'src/ngrx/myquestions/myquestions.effects';
import { myQuestionsReducer } from 'src/ngrx/myquestions/myquestions.reducer';
import { adminViewAllUsersReducer } from 'src/ngrx/adminviewallusers/adminviewalllusers.reducer';
import { AdminViewAllUsersEffects } from 'src/ngrx/adminviewallusers/adminviewallusers.effects';
import { AdminViewAllUsersService } from 'src/services/adminviewallusers/adminviewallusers';
import { AdminViewAllQuestionsService } from 'src/services/adminviewallquestions/adminviewallquestions';
import { adminViewAllQuestionsReducer } from 'src/ngrx/adminviewallquestions/adminviewallquestions.reducer';
import { AdminViewAllQuestionsEffects } from 'src/ngrx/adminviewallquestions/adminviewallquestions.effects';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ auth: authReducer,question:questionReducer, getQuestions: getQuestionsReducer, myQuestions:myQuestionsReducer,adminViewAllUsers:adminViewAllUsersReducer,adminViewAllQuestions:adminViewAllQuestionsReducer }),
    EffectsModule.forRoot([AuthEffects,QuestionEffects,GetQuestionsEffects,MyQuestionsEffects,AdminViewAllUsersEffects,AdminViewAllQuestionsEffects]),

  ],
  providers: [QuestionService,AuthenticateService,AuthGuardService,AdminViewAllUsersService,AdminViewAllQuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
