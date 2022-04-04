import { TestBed } from '@angular/core/testing';

import { FiledemoService } from './filedemo.service';

describe('FiledemoService', () => {
  let service: FiledemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiledemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
