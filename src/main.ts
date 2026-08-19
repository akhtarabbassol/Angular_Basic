import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { myApp } from './app/app';
// import {Child} from './app/ChildComponent'
bootstrapApplication(myApp , appConfig)
  .catch((err) => console.error(err));
