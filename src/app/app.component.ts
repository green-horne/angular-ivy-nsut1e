import { Component, OnDestroy, VERSION } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnDestroy {
  name = 'Angular ' + VERSION.major;

  user$: Observable<string>;

  subscriptions: Subscription = new Subscription();

  constructor(private readonly userService: UserService) {
    this.user$ = userService.getUserName();

   this.subscriptions.add(
     this.user$.subscribe( (data) => {
      console.log(' im constructor', data);
    })
   );
  }

    ngOnDestroy() {
      this.subscriptions.unsubscribe();
    }

}
