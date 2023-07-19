import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChiSiamoComponent } from './card-chi-siamo.component';

describe('CardChiSiamoComponent', () => {
  let component: CardChiSiamoComponent;
  let fixture: ComponentFixture<CardChiSiamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardChiSiamoComponent]
    });
    fixture = TestBed.createComponent(CardChiSiamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
