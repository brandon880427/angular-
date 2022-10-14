import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessessageComponent } from './messessage.component';

describe('MessessageComponent', () => {
  let component: MessessageComponent;
  let fixture: ComponentFixture<MessessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
