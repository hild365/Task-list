import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { TaskListComponent } from './app/components/task-list/task-list.component';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent,{
  providers:[
    provideRouter([
      {path:'',component:TaskListComponent}
    ]),
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));
