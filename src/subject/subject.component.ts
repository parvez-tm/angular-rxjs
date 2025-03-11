import { Component } from '@angular/core';
import { PremiumService } from '../services/premium.service';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  constructor(private premium: PremiumService){
    // this.premium.exclusive.next(true)
    this.premium.exclusive.set(true)
    console.log(this.premium.exclusive(),"asdas");
    
  }
}
