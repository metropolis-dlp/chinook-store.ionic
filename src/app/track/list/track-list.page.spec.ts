import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackListPage } from './track-list.page';

describe('TrackListPage', () => {
  let component: TrackListPage;
  let fixture: ComponentFixture<TrackListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrackListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
