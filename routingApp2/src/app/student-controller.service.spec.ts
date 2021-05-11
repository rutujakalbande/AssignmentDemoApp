import { TestBed } from '@angular/core/testing';

import { StudentControllerService } from './student-controller.service';

describe('StudentControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentControllerService = TestBed.get(StudentControllerService);
    expect(service).toBeTruthy();
  });
});
