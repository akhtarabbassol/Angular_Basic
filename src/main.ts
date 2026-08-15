import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { myApp } from './app/app';
bootstrapApplication(myApp , appConfig)
  .catch((err) => console.error(err));
