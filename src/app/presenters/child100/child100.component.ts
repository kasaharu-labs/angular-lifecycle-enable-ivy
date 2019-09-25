import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-child100',
  templateUrl: './child100.component.html',
  styleUrls: ['./child100.component.scss'],
})
export class Child100Component
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() {}

  ngOnChanges() {
    console.log('  Child100 : ngOnChange');
  }

  ngOnInit() {
    console.log('  Child100 : ngOnInit');
  }

  ngDoCheck() {
    console.log('  Child100 : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('  Child100 : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('  Child100 : ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('  Child100 : ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('  Child100 : ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('  Child100 : ngOnDestroy');
  }
}
