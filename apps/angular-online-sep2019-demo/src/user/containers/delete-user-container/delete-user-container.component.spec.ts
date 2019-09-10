import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserContainerComponent } from './delete-user-container.component';

describe('DeleteUserContainerComponent', () => {
  let component: DeleteUserContainerComponent;
  let fixture: ComponentFixture<DeleteUserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
