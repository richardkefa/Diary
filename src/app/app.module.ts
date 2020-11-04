import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayeventsComponent } from './dayevents/dayevents.component';
import { DiaryentryServiceService } from './diaryentry-service/diaryentry-service.service'
  import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    DayeventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DiaryentryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
