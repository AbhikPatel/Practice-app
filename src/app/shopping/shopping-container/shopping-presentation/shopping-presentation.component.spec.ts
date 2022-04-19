import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingPresentationComponent } from './shopping-presentation.component';

describe('ShoppingPresentationComponent', () => {
  let component: ShoppingPresentationComponent;
  let fixture: ComponentFixture<ShoppingPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
