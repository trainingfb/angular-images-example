// app.component.ts
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage],
  template: `
    <div class="page">
    <h1>Demo CDN + ngSRC</h1>
    
    <img src="assets/ie-cdn-logo.png" alt="">
    <!--Static CDN path-->
    <!--<img ngSrc="https://p5yeckmk.dev.cdn.imgeng.in/assets/image.png?imgeng=w_800" alt="" width="150" height="200" priority="true">-->

    <!--widh directives-->
    <!--<img ngSrc="assets/image.png?imgeng=w_100" alt="" width="150" height="200" priority="true">-->
    
    <!--<img ngSrc="assets/image.png?imgeng=w_100" alt=""
         width="150" height="200" priority="true">-->


    <!--with global directives, responsive with srcset-->
    <!--<img ngSrc="assets/image.png" alt=""
         ngSrcset="300w, 600w, 1024w"
         sizes="(max-width: 600px) 100vw, 50vw"
         width="150" height="200" priority="true">-->

    <div class="image-container">

      <img 
        ngSrc="assets/emote-pad.png" alt=""
         ngSrcset="100w, 600w, 1024w"
         sizes="(max-width: 600px) 100vw, 50vw"
         width="150" height="200" priority="true"
      >
        
    </div>
    </div>
  `,

})
export class AppComponent {
}
