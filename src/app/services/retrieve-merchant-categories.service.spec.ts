import { TestBed } from '@angular/core/testing';

import { RetrieveMerchantCategoriesService } from './retrieve-merchant-categories.service';

describe('RetrieveMerchantCategoriesService', () => {
  let service: RetrieveMerchantCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveMerchantCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
