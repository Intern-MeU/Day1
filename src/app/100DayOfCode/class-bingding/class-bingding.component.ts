import { Component } from "@angular/core";

@Component({
  selector: 'app-class-bingding',
  templateUrl: './class-bingding.component.html',
  styleUrls: ['./class-bingding.component.css']
})
export class ClassBingdingComponent {
  isWaring = false;
  isDanger = false;
  classes = 'box red-boder yellow-background';
  color = 'black';
}
