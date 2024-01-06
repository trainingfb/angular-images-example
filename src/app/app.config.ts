import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://p5yeckmk.dev.cdn.imgeng.in/angular-images-example/${config.src}`;
        // return `https://example.com/images?src=${config.src}&width=${config.width}`;
      },
    },
  ]
};
