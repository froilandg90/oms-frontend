import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LogisticChainAssignationRulesComponent } from './logistic-chain-assignation-rules.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LogisticChainAssignationRulesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LogisticChainAssignationRulesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'oms-front-end'`, () => {
    const fixture = TestBed.createComponent(LogisticChainAssignationRulesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('oms-front-end');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LogisticChainAssignationRulesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('oms-front-end app is running!');
  });
});
