import { Component } from '@angular/core';
import { PremiumService } from '../services/premium.service';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  data = new Subject()
  replyData = new ReplaySubject()
  listData:any = []
  replyList:any = []

  constructor(private premium: PremiumService) {
    // this.premium.exclusive.next(true)
    this.premium.exclusive.set(true)
    // console.log(this.premium.exclusive(),"asdas");



  }
  subscribeData(){
    this.data.subscribe(data => {
      this.listData.push(data)
      // Data emited and not subscribed will lost in it 
      console.log(this.listData);
    })
    
  }

  subscribeReply(){
    this.replyData.subscribe(data => {
      this.replyList.push(data)
      // Data emited and  not subscribed will not lost in it 
      console.log(this.replyList);
    })
    
  }

  emitData(){

    for (let i = 1; i <= 5; i++) {      
      setTimeout(()=>{
        this.data.next(i)
        this.replyData.next(i)
        console.log(i);
        
      },i*1000)
    }
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
