import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from './adminLTE3/main-header/main-header.component';
import { MainSidebarComponent } from './adminLTE3/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './adminLTE3/main-footer/main-footer.component';
import { ContentWrapperComponent } from './adminLTE3/content-wrapper/content-wrapper.component';
import { PreloaderComponent } from './adminLTE3/preloader/preloader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    ContentWrapperComponent,
    PreloaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    document.body.className =
      'sidebar-mini accent-purple layout-fixed layout-navbar-fixed';
  }
}
