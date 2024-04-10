import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSideComponent } from './table-side.component';

describe('TableSideComponent', () => {
  let component: TableSideComponent;
  let fixture: ComponentFixture<TableSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
