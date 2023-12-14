import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightLoaderComponent } from './flightloader.component';



describe('FlightloaderComponent', () => {
  let component: FlightLoaderComponent;
  let fixture: ComponentFixture<FlightLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
