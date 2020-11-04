import { Component } from '@angular/core';
import {Diaryentry} from './diaryentry'
import { DiaryentryServiceService } from './diaryentry-service/diaryentry-service.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public diaryentry: any=[]
  
  toogleEntry(index) {
    this.diaryentry[index].showentry= !this.diaryentry[index].showentry;
  }
  constructor(private diaryEntryService: DiaryentryServiceService) { 
   
  }

  ngOnInit() {
    this.diaryentry= this.diaryEntryService.getDiaryEntry()
  }
}
