import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ProjectComponent } from './app/components/project/project.component';

bootstrapApplication(ProjectComponent, appConfig)
  .catch((err) => console.error(err));
