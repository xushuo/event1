import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx'
import {Data} from "@angular/router";

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  searchInput:FormControl = new FormControl();
  birth: Date = new Date();
  pi: number = 3.1415926;
  constructor() {
    /*Observable.from([1,2,3,4])
      .filter(e => e%2==0)
      .map(e => e*e)
      .subscribe(
        e => console.log(e),
        error => console.error(error),
        () => console.log('结束了')
      )*/
    this.searchInput.valueChanges.debounceTime(500).subscribe((e)=>{
      this.onkey(e);
    })
  }

  ngOnInit() {
  }
  event1(event: any){
    console.log(event);
  }
  onkey(val: String){
    console.log(val);
  }
}
