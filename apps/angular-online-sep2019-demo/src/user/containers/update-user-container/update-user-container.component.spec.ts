import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserContainerComponent } from './update-user-container.component';

describe('UpdateUserContainerComponent', () => {
  let component: UpdateUserContainerComponent;
  let fixture: ComponentFixture<UpdateUserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
