import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunkaruhaComponent } from './munkaruha.component';

describe('MunkaruhaComponent', () => {
  let component: MunkaruhaComponent;
  let fixture: ComponentFixture<MunkaruhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunkaruhaComponent]
    });
    fixture = TestBed.createComponent(MunkaruhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
