import { NgModule, output } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './100DayOfCode/study/app.component';
import { FormsModule } from '@angular/forms';
import { helloComponent } from './100DayOfCode/Component/hello.component';
import { ClassBingdingComponent } from './100DayOfCode/class-bingding/class-bingding.component';
import { InputBingdingComponent } from './100DayOfCode/input-bingding/input-bingding.component';
import { OutputBindingComponentChill } from './100DayOfCode/output-binding/output-bindingChill/output-bindingChill.component';
import { OutputBindingComponentParent } from './100DayOfCode/output-binding/output-bindingParent/output-bindingParent.component';
import { ChildComponent } from './100DayOfCode/ViewChillComponent/viewchild/chill.component';
import { ParentComponent } from './100DayOfCode/ViewChillComponent/Parent/Parent.Component';

@NgModule({
  declarations: [
    AppComponent,
    helloComponent,
    ClassBingdingComponent,
    InputBingdingComponent,
    OutputBindingComponentChill,
    OutputBindingComponentParent,
    ChildComponent,
    ParentComponent
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
