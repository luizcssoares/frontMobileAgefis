import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaPage } from './vaga.page';

describe('VagaPage', () => {
  let component: VagaPage;
  let fixture: ComponentFixture<VagaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
