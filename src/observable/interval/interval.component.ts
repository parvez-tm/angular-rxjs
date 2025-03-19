import { Component } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css'
})
export class IntervalComponent {

  // videoSubscription= new Subscription()
  videoSubscriptionInterval: Subscription;
  videoSubscriptionTimer: Subscription
  constructor(){
    const streamInterval = interval(1000)
    const streamTimer = timer(6000,1000) //from where to start and how much time to take
    this.videoSubscriptionInterval = streamInterval.subscribe(res => {
      console.log(res, 'interval');
      
      if(res == 5){
        this.videoSubscriptionInterval.unsubscribe()
      }
    })

    this.videoSubscriptionTimer = streamTimer.subscribe(res => {
      console.log(res, 'timer');
      
      if(res == 5){
        this.videoSubscriptionTimer.unsubscribe()
      }
    })
  }
}
