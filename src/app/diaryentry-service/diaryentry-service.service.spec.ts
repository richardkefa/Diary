import { TestBed } from '@angular/core/testing';

import { DiaryentryServiceService } from './diaryentry-service.service';

describe('DiaryentryServiceService', () => {
  let service: DiaryentryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaryentryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
