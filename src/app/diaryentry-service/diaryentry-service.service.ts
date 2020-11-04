import { Injectable } from '@angular/core';
import { Diaryentry } from '../diaryentry'

@Injectable({
  providedIn: 'root'
})
export class DiaryentryServiceService {
diaryentries= [
  new Diaryentry(1,'best day','this is my best day',new Date(2020,3,20)),
  new Diaryentry(2,'best day','this is my best day',new Date(2020,3,20)),
  new Diaryentry(3,'best day','this is my best day',new Date(2020,3,20)),
  new Diaryentry(3,'best day','this is my best day',new Date(2020,3,20))
]
getDiaryEntry(){
  return this.diaryentries;
}

  constructor() { }
}
