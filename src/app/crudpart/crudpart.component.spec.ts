import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpartComponent } from './crudpart.component';

describe('CrudpartComponent', () => {
  let component: CrudpartComponent;
  let fixture: ComponentFixture<CrudpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudpartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
