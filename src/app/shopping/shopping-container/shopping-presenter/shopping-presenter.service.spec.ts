import { TestBed } from '@angular/core/testing';

import { ShoppingPresenterService } from './shopping-presenter.service';

describe('ShoppingPresenterService', () => {
  let service: ShoppingPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
