import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../model/student';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()stdInfo:Array<Istd>=[];
  constructor() { }

  ngOnInit(): void {
  }

}
