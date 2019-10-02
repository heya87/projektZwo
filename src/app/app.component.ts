import {Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {AuthService} from './authentication/service/auth.service';
import {Router} from '@angular/router';
import {authRoutesNames} from './authentication/auth.route.names';

// import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projektZwo';

  viewportMobileQuery: MediaQueryList;
  viewportTabletQuery: MediaQueryList;

  private _viewportQueryListener: () => void;


  // constructor(public router: Router, public authService: AuthService, public breakpointObserver: BreakpointObserver) 
  constructor(public router: Router, public authService: AuthService, private changeDetectionRef: ChangeDetectorRef, private media: MediaMatcher) {
    this._viewportQueryListener = () => changeDetectionRef.detectChanges();

    this.viewportMobileQuery = media.matchMedia('(max-width: 768px)');
    this.viewportMobileQuery.addEventListener('change', this._viewportQueryListener);
    this.viewportTabletQuery = media.matchMedia('(max-width: 1200px)');
    this.viewportTabletQuery.addEventListener('change', this._viewportQueryListener);
  }

  ngOnDestroy(): void {
    this.viewportMobileQuery.removeEventListener('change', this._viewportQueryListener);
    this.viewportTabletQuery.removeEventListener('change', this._viewportQueryListener);
  }

  // ngOnInit() {
  //   this.breakpointObserver
  //     .observe(['(min-width: 768px)', '(min-width: 1200px)'])
  //     .subscribe((state: BreakpointState) => {
  //       if (state.breakpoints['(min-width: 768px)'] &&! 
  //           state.breakpoints['(min-width: 1200px)']) {
  //         console.log('Viewport is between 768 and 1200!');
  //       } else if (state.breakpoints['(min-width: 1200px)']) {
  //         console.log('Viewport is over 1200!');
  //       } else {
  //         console.log('viewport under 768');
  //         console.log(this.breakpointObserver);
  //       }
  //     });
  // }

  logout() {
    this.authService.signOut().then(r => this.router.navigate([authRoutesNames.SIGNIN]));
  }
}
