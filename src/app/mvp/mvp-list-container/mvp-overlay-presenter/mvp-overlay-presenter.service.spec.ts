import { TestBed } from '@angular/core/testing';

import { MvpOverlayPresenterService } from './mvp-overlay-presenter.service';

describe('MvpOverlayPresenterService', () => {
  let service: MvpOverlayPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpOverlayPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
