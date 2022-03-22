import { TestBed } from '@angular/core/testing';

import { MvpListPresenterService } from './mvp-list-presenter.service';

describe('MvpListPresenterService', () => {
  let service: MvpListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
