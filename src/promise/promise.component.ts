import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent {

  isPremium = false

  ngOnInit(){
    setTimeout(()=> this.isPremium = true, 3000)
  }
}
