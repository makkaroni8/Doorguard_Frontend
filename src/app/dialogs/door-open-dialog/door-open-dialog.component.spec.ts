import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DoorOpenDialogComponent} from './door-open-dialog.component';

describe('DoorOpenDialogComponent', () => {
  let component: DoorOpenDialogComponent;
  let fixture: ComponentFixture<DoorOpenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoorOpenDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoorOpenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
