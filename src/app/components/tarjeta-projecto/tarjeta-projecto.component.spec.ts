import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProjectoComponent } from './tarjeta-projecto.component';

describe('TarjetaProjectoComponent', () => {
  let component: TarjetaProjectoComponent;
  let fixture: ComponentFixture<TarjetaProjectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaProjectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaProjectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
