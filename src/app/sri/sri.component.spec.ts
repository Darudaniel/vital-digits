import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SriComponent } from './sri.component';

describe('SriComponent', () => {
  let component: SriComponent;
  let fixture: ComponentFixture<SriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
