import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompetitionComponent } from './home-competition.component';

describe('HomeCompetitionComponent', () => {
  let component: HomeCompetitionComponent;
  let fixture: ComponentFixture<HomeCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCompetitionComponent]
    });
    fixture = TestBed.createComponent(HomeCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
