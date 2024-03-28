import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCodeComponent } from './create-code.component';

describe('CreateCodeComponent', () => {
  let component: CreateCodeComponent;
  let fixture: ComponentFixture<CreateCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
