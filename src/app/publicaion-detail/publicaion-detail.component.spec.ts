import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicaionDetailComponent } from './publicaion-detail.component';

describe('PublicaionDetailComponent', () => {
  let component: PublicaionDetailComponent;
  let fixture: ComponentFixture<PublicaionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicaionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicaionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
