import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShelterPage } from './shelter.page';

describe('ShelterPage', () => {
  let component: ShelterPage;
  let fixture: ComponentFixture<ShelterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShelterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
