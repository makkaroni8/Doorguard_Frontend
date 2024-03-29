import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeUsageHistoryComponent } from './code-usage-history.component';

describe('CodeUsageHistoryComponent', () => {
  let component: CodeUsageHistoryComponent;
  let fixture: ComponentFixture<CodeUsageHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeUsageHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeUsageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
