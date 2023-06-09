import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglequestionComponent } from './singlequestion.component';

describe('SinglequestionComponent', () => {
  let component: SinglequestionComponent;
  let fixture: ComponentFixture<SinglequestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SinglequestionComponent]
    });
    fixture = TestBed.createComponent(SinglequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
