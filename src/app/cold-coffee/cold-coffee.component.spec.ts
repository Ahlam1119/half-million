import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdCoffeeComponent } from './cold-coffee.component';

describe('ColdCoffeeComponent', () => {
  let component: ColdCoffeeComponent;
  let fixture: ComponentFixture<ColdCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColdCoffeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
