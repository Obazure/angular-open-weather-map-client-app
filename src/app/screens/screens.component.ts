import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectLoader} from '../store/reducers/selectors';
import {AppState} from '../store/reducers/root-reducer';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {
  loader$ = this.store.pipe(select(selectLoader));
  loading: boolean;

  constructor(private readonly store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.loader$.subscribe(loading => {
      this.loading = loading;
    });
  }
}
