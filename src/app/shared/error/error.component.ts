import {Component, OnInit} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import { BaseService } from 'src/app/services/base/base.service';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({marginLeft: -200}), stagger('10ms', animate('100ms ease-out', style({marginLeft: 0})))],
      {optional: true}
    ),
    query(':leave',
      animate('200ms', style({marginLeft: -200})),
      {optional: true}
    )
  ])
]);

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  animations: [listAnimation]
})
export class ErrorComponent implements OnInit {

  constructor(public base: Bas) {
  }

  ngOnInit(): void {
  }

  clearMessages() {
    this.base.errorMessage = [];
  }

}
