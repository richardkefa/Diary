import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Diaryentry} from "../diaryentry"
import { from } from 'rxjs';
@Component({
  selector: 'app-dayevents',
  templateUrl: './dayevents.component.html',
  styleUrls: ['./dayevents.component.css']
})
export class DayeventsComponent implements OnInit {
  @Input() entries:Diaryentry;
  @Output() isComplete=new EventEmitter<boolean>();
  entryDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
