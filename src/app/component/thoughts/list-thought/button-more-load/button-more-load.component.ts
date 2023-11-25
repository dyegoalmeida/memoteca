import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-more-load',
  templateUrl: './button-more-load.component.html',
  styleUrls: ['./button-more-load.component.css']
})
export class ButtonMoreLoadComponent implements OnInit {

  @Input() thereAreMoreThoughts: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
