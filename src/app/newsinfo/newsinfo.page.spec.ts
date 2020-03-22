import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsinfoPage } from './newsinfo.page';

describe('NewsinfoPage', () => {
  let component: NewsinfoPage;
  let fixture: ComponentFixture<NewsinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
