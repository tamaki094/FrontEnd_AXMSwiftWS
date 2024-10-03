import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('SingInComponent', () => {
  let component: SingInComponent;
  let fixture: ComponentFixture<SingInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
