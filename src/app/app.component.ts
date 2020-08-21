import { Component } from '@angular/core';
import {Diaryentry} from './diaryentry'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diaryentry:Diaryentry[] = [
    new Diaryentry(1,'best day','this is my best day',new Date(2020,3,20)),
    new Diaryentry(2,'best day','this is my best day',new Date(2020,3,20)),
    new Diaryentry(3,'best day','this is my best day',new Date(2020,3,20))
  ];
  toogleentry(index){
    this.diaryentry[index].showentry= !this.diaryentry[index].showentry;
  }
}
