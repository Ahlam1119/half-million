import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotCoffeeComponent } from './hot-coffee.component';

describe('HotCoffeeComponent', () => {
  let component: HotCoffeeComponent;
  let fixture: ComponentFixture<HotCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotCoffeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
