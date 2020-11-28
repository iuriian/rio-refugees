import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegalAssistancePage } from './legal-assistance.page';

describe('LegalAssistancePage', () => {
  let component: LegalAssistancePage;
  let fixture: ComponentFixture<LegalAssistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalAssistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegalAssistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
