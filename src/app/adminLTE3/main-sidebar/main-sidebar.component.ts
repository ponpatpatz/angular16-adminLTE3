import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
})
export class MainSidebarComponent {
  mainSidebarClassName = 'main-sidebar elevation-4 sidebar-light-purple';
  brandLinkClassName = 'brand-link bg-purple';
}
