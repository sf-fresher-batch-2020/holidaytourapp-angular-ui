import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdestinationComponent } from './viewdestination.component';

describe('ViewdestinationComponent', () => {
  let component: ViewdestinationComponent;
  let fixture: ComponentFixture<ViewdestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
