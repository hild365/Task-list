import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { TaskListComponent } from './app/components/task-list/task-list.component';


bootstrapApplication(AppComponent,{
  providers:[
    provideRouter([
      {path:'',component:TaskListComponent}
    ])
  ]
})
  .catch((err) => console.error(err));
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err=>console.error(err));