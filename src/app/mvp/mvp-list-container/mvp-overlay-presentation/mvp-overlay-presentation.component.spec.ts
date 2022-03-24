import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpOverlayPresentationComponent } from './mvp-overlay-presentation.component';

describe('MvpOverlayPresentationComponent', () => {
  let component: MvpOverlayPresentationComponent;
  let fixture: ComponentFixture<MvpOverlayPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpOverlayPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpOverlayPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
