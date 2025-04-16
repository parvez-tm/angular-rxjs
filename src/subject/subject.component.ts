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

  data = new Subject()
  listData:any = []

  constructor(private premium: PremiumService) {
    // this.premium.exclusive.next(true)
    this.premium.exclusive.set(true)
    // console.log(this.premium.exclusive(),"asdas");



  }
  subscribeData(){
    this.data.subscribe(data => {
      this.listData.push(data)
      // Data emited and and not subscribed will lost in it 
      console.log(this.listData);
    })
    
  }

  emitData(){

    setTimeout(()=>{
      this.data.next(1)
      console.log(1);
      
    },1000)
    setTimeout(()=>{
      this.data.next(2)
      console.log(2);
    },2000)
    setTimeout(()=>{
      this.data.next(3)
      console.log(3);
    },3000)
    setTimeout(()=>{
      this.data.next(4)
      console.log(4);
    },4000)

    setTimeout(()=>{
      this.data.next(5)
      console.log(5);
    },5000)


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
