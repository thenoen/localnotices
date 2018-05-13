import { TestBed, inject } from '@angular/core/testing';

import { ServerApiServiceService } from './server-api-service.service';

describe('ServerApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerApiServiceService]
    });
  });

  it('should be created', inject([ServerApiServiceService], (service: ServerApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
