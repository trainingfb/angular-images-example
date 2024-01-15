// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="page">
      <h1>Demo CDN + ngSRC</h1>
      
      <img src="https://28v1knas.dev.cdn.imgeng.in/assets/emote-pad.png" alt="" width="400" height="400">

      <div>Powered by</div>
      <img
        src="https://28v1knas.dev.cdn.imgeng.in/assets/cdn-logo.png" alt=""
        [width]="200"
        [height]="70"
      >
      
    </div>
    
  `,

})
export class AppComponent {
}
