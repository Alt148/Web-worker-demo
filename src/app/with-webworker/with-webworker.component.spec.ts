import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithWebworkerComponent } from './with-webworker.component';

describe('WithWebworkerComponent', () => {
  let component: WithWebworkerComponent;
  let fixture: ComponentFixture<WithWebworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithWebworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithWebworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
