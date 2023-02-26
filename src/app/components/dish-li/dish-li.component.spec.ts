import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishLiComponent } from './dish-li.component';

describe('DishLiComponent', () => {
  let component: DishLiComponent;
  let fixture: ComponentFixture<DishLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishLiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
