import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterComponent } from './water.component';

describe('WaterComponent', () => {
  let component: WaterComponent;
  let fixture: ComponentFixture<WaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
