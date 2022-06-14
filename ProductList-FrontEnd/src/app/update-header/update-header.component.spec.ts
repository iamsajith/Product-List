import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHeaderComponent } from './update-header.component';

describe('UpdateHeaderComponent', () => {
  let component: UpdateHeaderComponent;
  let fixture: ComponentFixture<UpdateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
