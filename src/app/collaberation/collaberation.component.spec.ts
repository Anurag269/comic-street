import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaberationComponent } from './collaberation.component';

describe('CollaberationComponent', () => {
  let component: CollaberationComponent;
  let fixture: ComponentFixture<CollaberationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaberationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollaberationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
