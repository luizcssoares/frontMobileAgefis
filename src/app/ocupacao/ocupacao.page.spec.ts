import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupacaoPage } from './ocupacao.page';

describe('OcupacaoPage', () => {
  let component: OcupacaoPage;
  let fixture: ComponentFixture<OcupacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
