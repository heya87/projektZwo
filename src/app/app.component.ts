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
      .observe(['(min-width: 768px)', '(min-width: 1200px)'])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints['(min-width: 768px)'] &&! 
            state.breakpoints['(min-width: 1200px)']) {
          console.log('Viewport is between 768 and 1200!');
        } else if (state.breakpoints['(min-width: 1200px)']) {
          console.log('Viewport is over 1200!');
        } else {
          console.log('viewport under 768');
        }
      });
  }

  logout() {
    this.authService.signOut().then(r => this.router.navigate([authRoutesNames.SIGNIN]));
  }
}
