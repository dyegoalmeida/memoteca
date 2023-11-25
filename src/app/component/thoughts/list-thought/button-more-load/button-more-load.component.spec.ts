import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMoreLoadComponent } from './button-more-load.component';

describe('ButtonMoreLoadComponent', () => {
  let component: ButtonMoreLoadComponent;
  let fixture: ComponentFixture<ButtonMoreLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonMoreLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMoreLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
