import { Component, OnInit } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor() { }

  model: User = new User();

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model)
  }

}
