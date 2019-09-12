import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesocupacaoPage } from './desocupacao.page';

describe('DesocupacaoPage', () => {
  let component: DesocupacaoPage;
  let fixture: ComponentFixture<DesocupacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesocupacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesocupacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
