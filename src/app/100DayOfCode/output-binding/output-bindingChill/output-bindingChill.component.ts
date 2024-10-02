import { Component, Input, input, Output } from "@angular/core";
import { Author, authors} from "../../../static/author.model";
import { EventEmitter } from "@angular/core";
@Component({
  selector: 'app-output-bindingChill',
  templateUrl: './output-bindingChill.component.html',
})
export class OutputBindingComponentChill {
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
  onSelect() {
    console.log('Da nhan: '+this.author.name);
    this.select.emit(this.author);
  }
  onDelete() {
    console.log('Da xoa: '+this.author.name);
    this.delete.emit(this.author.id);
  }
}
