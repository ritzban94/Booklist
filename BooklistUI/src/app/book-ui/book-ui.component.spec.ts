import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUIComponent } from './book-ui.component';

describe('BookUIComponent', () => {
  let component: BookUIComponent;
  let fixture: ComponentFixture<BookUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
