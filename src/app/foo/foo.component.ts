import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor(private dataSvc: SharedDataService) { 
    console.log(this.dataSvc.data);
  }

  ngOnInit() {
  }

  get sharedData() {
    return this.dataSvc.data;
  }

  changeSharedData = () => {
    this.dataSvc.data = "Foo";
  }
}
