import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string;
  arrayValue = ['Eduardo', 'Raquel', 2, 4] 
  constructor() { }

  ngOnInit(): void {
    //this.name = 'Eduardo';
  }

  insertValue(Newname:string){
    this.name = Newname;
  }
}
