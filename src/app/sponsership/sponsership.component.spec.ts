import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsershipComponent } from './sponsership.component';

describe('SponsershipComponent', () => {
  let component: SponsershipComponent;
  let fixture: ComponentFixture<SponsershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsershipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
