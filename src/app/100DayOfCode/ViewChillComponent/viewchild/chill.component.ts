import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: `<div>say hello</div>`
})
export class ChildComponent {
  afterViewInit() {
    console.log('create successfully!');
  }
  clickButton() {
    console.log('Hello from Child Component!');
  }
}
