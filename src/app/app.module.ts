import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './100DayOfCode/study/app.component';
import { FormsModule } from '@angular/forms';
import { helloComponent } from './100DayOfCode/Component/hello.component';
import { ClassBingdingComponent } from './100DayOfCode/class-bingding/class-bingding.component';
import { InputBingdingComponent } from './100DayOfCode/input-bingding/input-bingding.component';

@NgModule({
  declarations: [
    AppComponent,
    helloComponent,
    ClassBingdingComponent,
    InputBingdingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
