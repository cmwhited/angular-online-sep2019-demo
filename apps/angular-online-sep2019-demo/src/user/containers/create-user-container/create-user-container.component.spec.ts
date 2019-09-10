import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserContainerComponent } from './create-user-container.component';

describe('CreateUserContainerComponent', () => {
  let component: CreateUserContainerComponent;
  let fixture: ComponentFixture<CreateUserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
