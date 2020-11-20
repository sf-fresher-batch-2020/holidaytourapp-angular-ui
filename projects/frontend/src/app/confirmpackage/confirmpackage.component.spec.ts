import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmpackageComponent } from './confirmpackage.component';

describe('ConfirmpackageComponent', () => {
  let component: ConfirmpackageComponent;
  let fixture: ComponentFixture<ConfirmpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmpackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
