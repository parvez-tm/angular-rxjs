import { Component } from '@angular/core';
import { PremiumService } from '../services/premium.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  constructor(private premium: PremiumService) {
    console.log("hh");
    
    // this.premium.exclusive.next(true)
    this.premium.exclusive.set(true)
    // console.log(this.premium.exclusive(),"asdas");

  }

  ngOnInit() {

    // Another Example
    const subject = new Subject<number>();
    // subject.subscribe({
    //   next: value => console.log('Subscriber 1:', value),
    //   error: err => console.log('Error:', err),
    // });
    subject.subscribe(value => console.log('Subscriber 2:', value));

    for (let i = 0; i < 10; i++) {
      setTimeout(()=>{
        subject.next(i)
      },i*1000)
    }

    // for (let i = 0; i < 10; i++) {
    //   setTimeout(() => {
    //     subject.next(i);
    
    //     if (i === 9) {
    //       subject.error('Closes');
    //     }
    //   }, i * 1000); // Each emission happens after i * 1000ms
    // }
    // subject.next(1);
    // subject.next(2);
    subject.error('Closes')
  }

  ngOnDestroy() {
    // this.premium.exclusive.next(false)
    this.premium.exclusive.set(false)
  }
}
