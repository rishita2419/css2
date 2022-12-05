import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  ngOnInit(): void {
    // console.log('child triggered');

    this.myCity.emit('BSL')
  }


  @Input() myName:any;

  @Output() myCity = new EventEmitter<any>;

  child(){
    console.log("child");
  }

}
