import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentHeaderComponent } from '../content-header/content-header.component';

@Component({
  selector: 'app-content-wrapper',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentHeaderComponent],
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss'],
})
export class ContentWrapperComponent {}
