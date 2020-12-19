import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZadanieService } from './zadanie.service';

@Component({
  selector: 'app-zadanie',
  templateUrl: './zadanie.component.html',
  styleUrls: ['./zadanie.component.css']
})
export class ZadanieComponent implements OnInit {

  constructor(public zadanieService : ZadanieService, private route: ActivatedRoute) { }

  zadanie: any;

  ngOnInit(): void{
    this.route.params.subscribe(data => {
      this.getZadanie(data.zadanie_id);
    })
  }

  getZadanie(zadanie_id: number) {
    this.zadanie = this.zadanieService.getZadanie(zadanie_id).subscribe(data => {
      this.zadanie = data[0];
      console.log(this.zadanie);
    })
  }


}
