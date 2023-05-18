import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesTreeDiagramComponent } from './rules-tree-diagram.component';

describe('RulesTreeDiagramComponent', () => {
  let component: RulesTreeDiagramComponent;
  let fixture: ComponentFixture<RulesTreeDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesTreeDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesTreeDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
