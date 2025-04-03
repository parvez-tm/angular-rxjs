import { Component } from '@angular/core';
import { Subscription, from, interval, map, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.css'
})
export class ToArrayComponent {

  obj = [
    {
      name: 'PTM',
      value: 'infinite'
    },
    {
      name: 'Shin',
      value: '100'
    },
  ]
  // Ex - 01
  source = interval(1000)
  sub: Subscription
  constructor(){

    this.sub = this.source.pipe(
      // map((d:any)=>d*2) Transforming Data
      take(4),
      toArray()
    )
    .subscribe((d)=>{
      console.log(d,"As");
      
      // if(d == 8){
      //   this.sub.unsubscribe()
      // }
    })

    from(this.obj).pipe(
      toArray() // If not used the data will be streamed in object
    )
    .subscribe((res)=>{
      console.log(res,"as");
      
    })
    
  }
}
