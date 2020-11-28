import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutYouPage } from './about-you.page';

describe('AboutYouPage', () => {
  let component: AboutYouPage;
  let fixture: ComponentFixture<AboutYouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutYouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutYouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
