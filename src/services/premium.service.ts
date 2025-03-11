import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PremiumService {

  // exclusive = new Subject<boolean>()
  exclusive = signal<boolean>(false)
  constructor() { }
}
