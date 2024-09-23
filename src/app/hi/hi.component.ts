import { Component } from "@angular/core";

@Component({
    selector: 'hi',
    template: "<h1>hi: {{name}}</h1>"
})
export class HiComponent {
    name = "Tran Van Tinh";
}