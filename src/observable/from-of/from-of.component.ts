import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from,of, toArray } from 'rxjs';

@Component({
  selector: 'app-from-of',
  imports: [CommonModule],
  templateUrl: './from-of.component.html',
  styleUrl: './from-of.component.css'
})
export class FromOfComponent {

  // data = of('PTM','Anand') 
  data = of('PTM', 'Anand').pipe(
    toArray() // Collects emitted values into an array
  );
  data2 = of(['PTM','Anand']) 

  constructor(){
    // let ob = of(10, 20, 30)
    //   .subscribe({
    //     next: value => console.log('next:', value),
    //     error: err => console.log('error:', err),
    //     complete: () => console.log('the end'),
    //   });

      let ob2 = from([10, 20, 30])
      .subscribe({
        next: value => console.log('next:', value),
        error: err => console.log('error:', err),
        complete: () => console.log('the end'),
      });
  }
}
