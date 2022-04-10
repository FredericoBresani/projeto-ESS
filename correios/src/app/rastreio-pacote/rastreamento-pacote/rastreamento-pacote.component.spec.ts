import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreamentoPacoteComponent } from './rastreamento-pacote.component';

describe('RastreamentoPacoteComponent', () => {
  let component: RastreamentoPacoteComponent;
  let fixture: ComponentFixture<RastreamentoPacoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RastreamentoPacoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreamentoPacoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
