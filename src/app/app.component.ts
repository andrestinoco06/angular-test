import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'initial-project';

  text = '';

  toPrint(){
    console.log(this.text);
  }
}
