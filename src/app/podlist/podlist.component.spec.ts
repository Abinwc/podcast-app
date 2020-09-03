import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodlistComponent } from './podlist.component';

describe('PodlistComponent', () => {
  let component: PodlistComponent;
  let fixture: ComponentFixture<PodlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
