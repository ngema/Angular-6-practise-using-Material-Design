import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogforgotpComponent } from './dialogforgotp.component';

describe('DialogforgotpComponent', () => {
  let component: DialogforgotpComponent;
  let fixture: ComponentFixture<DialogforgotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogforgotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogforgotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
