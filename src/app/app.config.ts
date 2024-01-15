// app.config
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

const host = 'https://p5yeckmk.dev.cdn.imgeng.in';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        console.log(config)
        return config.width ?
            `${host}/${config.src}?imgeng=w_${config.width}` :
            `${host}/${config.src}`;
      },
    },
  ]
};
