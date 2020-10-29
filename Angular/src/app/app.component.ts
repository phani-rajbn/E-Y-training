import { Component } from '@angular/core';

@Component({
  selector: 'apple',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //data members
  title = 'Welcome to my Application';
  footer: string = "Programmed by Phaniraj.Inc-2020";  
  
  //functions
  onClick(){
    alert(this.title)
  }
}
