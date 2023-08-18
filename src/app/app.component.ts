import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  constructor(){
    // setTimeout(() => {
    //   this.title = 'changed title after 2 seconds';
    // }, 2000);
  }
}
