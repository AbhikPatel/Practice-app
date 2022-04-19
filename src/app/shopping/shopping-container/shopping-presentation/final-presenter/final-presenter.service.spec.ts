import { TestBed } from '@angular/core/testing';

import { FinalPresenterService } from './final-presenter.service';

describe('FinalPresenterService', () => {
  let service: FinalPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
