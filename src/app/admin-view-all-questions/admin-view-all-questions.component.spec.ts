import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllQuestionsComponent } from './admin-view-all-questions.component';

describe('AdminViewAllQuestionsComponent', () => {
  let component: AdminViewAllQuestionsComponent;
  let fixture: ComponentFixture<AdminViewAllQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminViewAllQuestionsComponent]
    });
    fixture = TestBed.createComponent(AdminViewAllQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
