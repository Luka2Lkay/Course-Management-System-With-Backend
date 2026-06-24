import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnimationsComponent } from './dialog-animations.component';

describe('DialogAnimationsComponent', () => {
  let component: DialogAnimationsComponent;
  let fixture: ComponentFixture<DialogAnimationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAnimationsComponent]
    });
    fixture = TestBed.createComponent(DialogAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
