import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have nine squares', () => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.squares.length).toEqual(9);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelectorAll('app-square').length).toEqual(9);
  });
});