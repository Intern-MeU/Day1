import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../viewchild/chill.component';
@Component({
  selector : "app-parent",
  templateUrl : "./Parent.Component.html",
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  triggerChildMethod() {
    this.childComponent.clickButton();
  }
  ngAfterViewInit() {
    this.childComponent.afterViewInit();
  }
}
