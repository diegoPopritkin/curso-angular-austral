import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-wishlist';
  togleColor = false;

  ngOnInit () {
    setInterval( ()=> this.togleColor = !this.togleColor,2000)
  }
}


