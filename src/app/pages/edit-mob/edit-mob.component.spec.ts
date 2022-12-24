import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMobComponent } from './edit-mob.component';

describe('EditMobComponent', () => {
  let component: EditMobComponent;
  let fixture: ComponentFixture<EditMobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
