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
    // this.premium.exclusive.next(true)
    this.premium.exclusive.set(true)
    // console.log(this.premium.exclusive(),"asdas");

  }

  ngOnInit() {

    // Another Example
    const subject = new Subject<number>();
    subject.subscribe(value => console.log('Subscriber 1:', value));
    subject.subscribe(value => console.log('Subscriber 2:', value));

    subject.next(1);
    subject.next(2);
  }

  ngOnDestroy() {
    // this.premium.exclusive.next(false)
    this.premium.exclusive.set(false)
  }
}
