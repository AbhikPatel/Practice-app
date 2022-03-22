import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpListPresentationComponent } from './mvp-list-presentation.component';

describe('MvpListPresentationComponent', () => {
  let component: MvpListPresentationComponent;
  let fixture: ComponentFixture<MvpListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
