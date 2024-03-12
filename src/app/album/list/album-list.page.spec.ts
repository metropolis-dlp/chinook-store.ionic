import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumListPage } from './album-list.page';

describe('AlbumListPage', () => {
  let component: AlbumListPage;
  let fixture: ComponentFixture<AlbumListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlbumListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
