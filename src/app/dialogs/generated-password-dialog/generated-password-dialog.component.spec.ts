import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GeneratedPasswordDialogComponent} from './generated-password-dialog.component';

describe('GeneratedPasswordDialogComponent', () => {
  let component: GeneratedPasswordDialogComponent;
  let fixture: ComponentFixture<GeneratedPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratedPasswordDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
