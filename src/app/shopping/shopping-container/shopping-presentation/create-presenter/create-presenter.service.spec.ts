import { TestBed } from '@angular/core/testing';

import { CreatePresenterService } from './create-presenter.service';

describe('CreatePresenterService', () => {
  let service: CreatePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
