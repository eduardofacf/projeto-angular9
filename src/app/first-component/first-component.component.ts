import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string;
  constructor() { }

  ngOnInit(): void {
    //this.name = 'Eduardo';
  }

  insertValue(Newname:string){
    this.name = Newname;
  }
}
