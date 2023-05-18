import { TestBed } from '@angular/core/testing';

import { RulesTreeDiagramService } from './rules-tree-diagram.service';

describe('RulesTreeDiagramService', () => {
  let service: RulesTreeDiagramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesTreeDiagramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
