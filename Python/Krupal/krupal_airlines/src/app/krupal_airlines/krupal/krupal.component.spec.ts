import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrupalComponent } from './krupal.component';

describe('KrupalComponent', () => {
  let component: KrupalComponent;
  let fixture: ComponentFixture<KrupalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrupalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
