import {Component} from '@angular/core';
import {AuthService} from './authentication/service/auth.service';
import {Router} from '@angular/router';
import {authRoutesNames} from './authentication/auth.route.names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projektZwo';

  constructor(public router: Router, public authService: AuthService) {

  }

  logout() {
    this.authService.signOut().then(r => this.router.navigate([authRoutesNames.SIGNIN]));
  }
}
