import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkBalanceComponent } from './milk-balance.component';

describe('MilkBalanceComponent', () => {
  let component: MilkBalanceComponent;
  let fixture: ComponentFixture<MilkBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
