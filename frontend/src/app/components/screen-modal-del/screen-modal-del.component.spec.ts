import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenModalDelComponent } from './screen-modal-del.component';

describe('ScreenModalDelComponent', () => {
  let component: ScreenModalDelComponent;
  let fixture: ComponentFixture<ScreenModalDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenModalDelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenModalDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
