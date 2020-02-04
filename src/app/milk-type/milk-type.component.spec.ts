import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkTypeComponent } from './milk-type.component';

describe('MilkTypeComponent', () => {
  let component: MilkTypeComponent;
  let fixture: ComponentFixture<MilkTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
