import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingRootComponent } from './shooping-root.component';

describe('ShoopingRootComponent', () => {
  let component: ShoopingRootComponent;
  let fixture: ComponentFixture<ShoopingRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoopingRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoopingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
