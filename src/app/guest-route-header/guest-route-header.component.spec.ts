import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRouteHeaderComponent } from './guest-route-header.component';

describe('GuestRouteHeaderComponent', () => {
  let component: GuestRouteHeaderComponent;
  let fixture: ComponentFixture<GuestRouteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestRouteHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestRouteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
