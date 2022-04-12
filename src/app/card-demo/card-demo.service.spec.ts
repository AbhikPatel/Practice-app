import { TestBed } from '@angular/core/testing';

import { CardDemoService } from './card-demo.service';

describe('CardDemoService', () => {
  let service: CardDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
