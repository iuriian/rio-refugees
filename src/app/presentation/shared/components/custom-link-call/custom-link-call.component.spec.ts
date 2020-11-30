import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomLinkCallComponent } from './custom-link-call.component';

describe('CustomLinkCallComponent', () => {
  let component: CustomLinkCallComponent;
  let fixture: ComponentFixture<CustomLinkCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLinkCallComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomLinkCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
