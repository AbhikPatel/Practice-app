import { TestBed } from '@angular/core/testing';

import { MvpFormPresenterService } from './mvp-form-presenter.service';

describe('MvpFormPresenterService', () => {
  let service: MvpFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
