import {Component} from '@angular/core';
import {AuthService} from './authentication/service/auth.service';
import {Router} from '@angular/router';
import {authRoutesNames} from './authentication/auth.route.names';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projektZwo';

  constructor(public router: Router, public authService: AuthService, public breakpointObserver: BreakpointObserver) {

  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 500px or over!');
        } else {
          console.log('Viewport is getting smaller!');
        }
      });
  }

  logout() {
    this.authService.signOut().then(r => this.router.navigate([authRoutesNames.SIGNIN]));
  }
}
