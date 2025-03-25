import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

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
  constructor() { }


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
