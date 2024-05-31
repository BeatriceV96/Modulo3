import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompletesComponent } from './todo-completes.component';

describe('TodoCompletesComponent', () => {
  let component: TodoCompletesComponent;
  let fixture: ComponentFixture<TodoCompletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoCompletesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoCompletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
