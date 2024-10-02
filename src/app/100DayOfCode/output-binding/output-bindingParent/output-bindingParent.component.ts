import { Component, Output } from "@angular/core";
import { Author, authors} from "../../../static/author.model";
@Component({
  selector: 'app-output-bindingParent',
  templateUrl: './output-bindingParent.component.html',
})
export class OutputBindingComponentParent {
  authors = authors;
  CurrentAuthor = authors[0];

  onSelected(author: Author) {
    this.CurrentAuthor = author;
  }
  onDelete(id: number) {
    this.authors = this.authors.filter((author) => author.id !== id);
    if(id == this.CurrentAuthor.id){
      this.CurrentAuthor = this.authors[0];
    }
  }

}
