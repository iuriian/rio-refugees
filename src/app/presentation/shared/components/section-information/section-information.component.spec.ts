import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SectionInformationComponent } from './section-information.component';

describe('SectionInformationComponent', () => {
  let component: SectionInformationComponent;
  let fixture: ComponentFixture<SectionInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionInformationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
