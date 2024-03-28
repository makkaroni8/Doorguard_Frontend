import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CodesTableComponent} from './codes-table.component';

describe('CodesTableComponent', () => {
  let component: CodesTableComponent;
  let fixture: ComponentFixture<CodesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
