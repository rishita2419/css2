import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],

})
export class ParentComponent implements OnInit{

  ngOnInit(): void {
      // console.log('parent triggered')
  }

   city:any;

  name="sachin";

  send(val:any){
    console.log("input value",val.value);
  }

  showCity(val:any){
    setTimeout(() => {
      this.city =val;
    }, 2000);

  }



  parent(){
    console.log("parent");
  }
}
