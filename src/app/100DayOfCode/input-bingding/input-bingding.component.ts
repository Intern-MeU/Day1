import { Component, Input }  from "@angular/core";
@Component({
  selector : 'app-input-bingding',
  templateUrl: './input-bingding.component.html',
  styleUrl: './input-bingding.component.css'
})
export class InputBingdingComponent{
  @Input('progess-count') progess = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progessColor = 'red';
  constructor(){ }
  ngOnInit(): void {}
  ngOnChanges(): void { console.log('ngOnChanges',{progess : this.progess,backgroundColor : this.backgroundColor, progessColor: this.backgroundColor}) }
  // ngDoCheck(): void { console.log('ngDoCheck',{progess : this.progess,backgroundColor : this.backgroundColor, progessColor: this.backgroundColor}) }
  // ngAfterContentInit(): void { console.log('ngAfterContentInit',{progess : this.progess,backgroundColor : this.backgroundColor, progessColor: this.backgroundColor}) }
  // ngAfterContentChecked(): void { console.log('ngAfterContentChecked',{progess : this.progess,backgroundColor : this.backgroundColor, progessColor: this.backgroundColor}) }
  // ngAfterViewInit(): void { console.log('ngAfterViewInit',{progess : this.progess,backgroundColor : this.backgroundColor, progessColor: this.backgroundColor}) }
  // ngAfterViewChecked(): void { console.log('ngAfterViewChecked',{progess : this.progess,backgroundColor : this.backgroundColor, progessColor: this.backgroundColor}) }
}
