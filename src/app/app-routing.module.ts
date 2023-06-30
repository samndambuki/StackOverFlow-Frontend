import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/services/guards/AuthGuard.service';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landingpage/landingpage.component').then(
        (m) => m.LandingpageComponent
      ),
  },

  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.component').then((m) => m.SignupComponent),
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    canActivate: [AuthGuardService],
  },

  {
    path: 'askquestion',
    loadComponent: () =>
      import('./askquestion/askquestion.component').then(
        (m) => m.AskquestionComponent
      ),
    canActivate: [AuthGuardService],
  },

  {
    path: 'singlequestion/:id',
    loadComponent: () =>
      import('./singlequestion/singlequestion.component').then(
        (m) => m.SinglequestionComponent
      ),
    canActivate: [AuthGuardService],
  },

  {
    path: 'userprofile',
    loadComponent: () =>
      import('./user-profile/user-profile.component').then(
        (m) => m.UserProfileComponent
      ),
    canActivate: [AuthGuardService],
  },

  {
    path: 'myquestions',
    loadComponent: () =>
      import('./my-questions/my-questions.component').then(
        (m) => m.MyQuestionsComponent
      ),
    canActivate: [AuthGuardService],
  },

  {
    path: 'updatequestion',
    loadComponent: () =>
      import('./update-question/update-question.component').then(
        (m) => m.UpdateQuestionComponent
      ),
    canActivate: [AuthGuardService],
  },

  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
    canActivate: [AuthGuardService],
  },

  {
    path: 'adminseesallusers',
    loadComponent: () =>
      import('./admin-sees-all-users/admin-sees-all-users.component').then(
        (m) => m.AdminSeesAllUsersComponent
      ),
    canActivate: [AuthGuardService],
  },

  {
    path: 'adminviewallquestions',
    loadComponent: () =>
      import(
        './admin-view-all-questions/admin-view-all-questions.component'
      ).then((m) => m.AdminViewAllQuestionsComponent),
    canActivate: [AuthGuardService],
  },

  {
    path: 'tags',
    loadComponent: () =>
      import('./tags/tags.component').then((m) => m.TagsComponent),
    canActivate: [AuthGuardService],
  },

  {
    path: 'specifictags/:tagId',
    loadComponent: () =>
      import('./specific-tags/specific-tags.component').then(
        (m) => m.SpecificTagsComponent
      ),
    canActivate: [AuthGuardService],
  },

  //wild card route to match any route that doesnt match any of the defined routes
  {
    path: '**',
    loadComponent: () =>
      import('./landingpage/landingpage.component').then(
        (m) => m.LandingpageComponent
      ),
  },
];

@NgModule({
  providers: [AuthGuardService],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
