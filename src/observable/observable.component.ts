import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

  data: number[] = []
  count = 0
  newObservable: any
  constructor() {

    // Cold Observable 
    const coldObservable = new Observable(subscriber => {
      console.log('Observable starts');
      subscriber.next('Hello');
      subscriber.next('World');
      subscriber.complete();
    });

    // Subscriber 1
    coldObservable.subscribe(value => console.log('Subscriber 1:', value));

    // Subscriber 2
    coldObservable.subscribe(value => console.log('Subscriber 2:', value));

    // Hot Observable 
    const hotObservable = new Subject();

    // Subscriber 1
    hotObservable.subscribe(value => console.log('Subscriber 1:', value));

    // Emit data from the "source"
    hotObservable.next('Hello');

    // Subscriber 2 (subscribing late)
    hotObservable.subscribe(value => console.log('Subscriber 2:', value));

    // Emit more data
    hotObservable.next('World');


  }


  ngOnInit() {
    this.newObservable = new Observable((observer) => {
      setInterval(() => {
        this.count++;
        // this.data.push(this.count);
        observer.next(this.count);
        if (this.count == 5) {
          observer.complete();
        };
        // observer.error('Hat')
      }, 2000)
    })
  }

  getData() {

    this.newObservable.subscribe((res: number) => {
      console.log(res);
    }, (err: any) => {
      console.log(err);
    })
  }
}
