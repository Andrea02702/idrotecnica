import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompetenzeComponent } from './card-competenze.component';

describe('CardCompetenzeComponent', () => {
  let component: CardCompetenzeComponent;
  let fixture: ComponentFixture<CardCompetenzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCompetenzeComponent]
    });
    fixture = TestBed.createComponent(CardCompetenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
