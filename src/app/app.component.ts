import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage],
  template: `
    <h1>Demo Angular Image</h1>
    <img ngSrc="assets/image.png" alt="" width="150" height="200" priority="true">
  `,
})
export class AppComponent {
}
