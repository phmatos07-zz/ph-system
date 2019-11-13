import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhCoreUtilsComponent } from './ph-core-utils.component';

describe('PhCoreUtilsComponent', () => {
  let component: PhCoreUtilsComponent;
  let fixture: ComponentFixture<PhCoreUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhCoreUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhCoreUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
