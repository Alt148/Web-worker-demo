import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoWebworkerComponent } from './no-webworker.component';

describe('NoWebworkerComponent', () => {
  let component: NoWebworkerComponent;
  let fixture: ComponentFixture<NoWebworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoWebworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoWebworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
