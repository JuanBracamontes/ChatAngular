import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatareaComponent } from './listatarea.component';

describe('ListatareaComponent', () => {
  let component: ListatareaComponent;
  let fixture: ComponentFixture<ListatareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListatareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
