import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternsWrapperComponent } from './patterns-wrapper.component';

describe('PatternsWrapperComponent', () => {
  let component: PatternsWrapperComponent;
  let fixture: ComponentFixture<PatternsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
