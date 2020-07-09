import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Picture } from '../models/api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  pic:any;
  error:any;

  constructor(private apiService: ApiService) {
    this.savImg();
   }

  ngOnInit(): void {
  }

  savImg(){
    this.apiService.getImg().subscribe(
      (data:Picture) => {
        this.pic = data;
        console.log('Dado sendo recebido', data);
      },
      (error:any) => {
        this.error = error;
        console.log('Erro', error);


      }
    );
  }

}
