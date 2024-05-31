import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTrovatiComponent } from './users-trovati.component';

describe('UsersTrovatiComponent', () => {
  let component: UsersTrovatiComponent;
  let fixture: ComponentFixture<UsersTrovatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersTrovatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersTrovatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
