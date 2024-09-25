import { Component } from "@angular/core";
@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styles: ['']
})
export class helloComponent {
    fullname = 'Vu Thanh Duong';

    textType = 'text';
    user = {
        name : "Tran Van Tinh",
        age : 20
    }
    handleClick(value: string) {
        console.log('clicked <3', value); // in thằng value này ra màn hình
    }
}
