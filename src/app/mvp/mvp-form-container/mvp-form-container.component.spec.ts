import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpFormContainerComponent } from './mvp-form-container.component';

describe('MvpFormContainerComponent', () => {
  let component: MvpFormContainerComponent;
  let fixture: ComponentFixture<MvpFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
