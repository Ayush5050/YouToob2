import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightMenuComponent } from './main-right-menu.component';

describe('MainRightMenuComponent', () => {
  let component: MainRightMenuComponent;
  let fixture: ComponentFixture<MainRightMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
