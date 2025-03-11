import { Component } from '@angular/core';
import { PremiumService } from '../services/premium.service';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

  constructor(private premium: PremiumService){
    // this.premium.exclusive.next(false)
    this.premium.exclusive.set(false)
  }
}
