import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpListContainerComponent } from './mvp-list-container.component';

describe('MvpListContainerComponent', () => {
  let component: MvpListContainerComponent;
  let fixture: ComponentFixture<MvpListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
