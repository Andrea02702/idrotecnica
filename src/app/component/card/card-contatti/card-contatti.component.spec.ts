import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContattiComponent } from './card-contatti.component';

describe('CardContattiComponent', () => {
  let component: CardContattiComponent;
  let fixture: ComponentFixture<CardContattiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardContattiComponent]
    });
    fixture = TestBed.createComponent(CardContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
