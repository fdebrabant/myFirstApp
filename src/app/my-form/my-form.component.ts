import { Component, OnInit } from '@angular/core';
import { Order } from './models/Order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  model: Order = new Order();

  onSubmit(){
    console.log(this.model)
  }

}
