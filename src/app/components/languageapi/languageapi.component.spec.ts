import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageapiComponent } from './languageapi.component';

describe('LanguageapiComponent', () => {
  let component: LanguageapiComponent;
  let fixture: ComponentFixture<LanguageapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
