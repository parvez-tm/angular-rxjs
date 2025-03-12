import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

  data:number[] = []
  count = 1
  newObservable:any
  constructor(){}


  ngOnInit(){
    this.newObservable = new Observable((obs)=> {
      setInterval(()=> {
        this.count++
        this.data.push(this.count);
        // obs.next(this.data)
        obs.error('Hat')
      }, 1000)
    })
  }

  getData(){
    
    this.newObservable.subscribe((res:number)=>{
      console.log(res);
    },(err:any)=>{
      console.log(err);
    })
  }
}
