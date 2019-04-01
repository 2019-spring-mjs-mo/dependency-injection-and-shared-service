import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  private birdSvc;

  constructor(parrotSvc: SharedDataService) {
    this.birdSvc = parrotSvc;
   }

  ngOnInit() {
  }

  public get cat() {
    return this.birdSvc.data;
  }

  kitten() {
    this.birdSvc.data = "Bar";
  }
}
