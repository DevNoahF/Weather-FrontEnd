import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCardComponents } from './loading-card.components';

describe('LoadingCardComponents', () => {
  let component: LoadingCardComponents;
  let fixture: ComponentFixture<LoadingCardComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingCardComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingCardComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
