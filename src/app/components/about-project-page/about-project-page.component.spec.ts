import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectPageComponent } from './about-project-page.component';

describe('AboutProjectPageComponent', () => {
  let component: AboutProjectPageComponent;
  let fixture: ComponentFixture<AboutProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProjectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
