import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeesAllUsersComponent } from './admin-sees-all-users.component';

describe('AdminSeesAllUsersComponent', () => {
  let component: AdminSeesAllUsersComponent;
  let fixture: ComponentFixture<AdminSeesAllUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminSeesAllUsersComponent]
    });
    fixture = TestBed.createComponent(AdminSeesAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
