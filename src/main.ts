// import { bootstrapApplication } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
// import { provideRouter } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { PersonListComponent } from './app/person-list/person-list.component'; // Import your component
// import { routes } from './app/app.routes'; // Import the routes configuration

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes), // your routing setup
//     HttpClientModule, // Add HttpClientModule here
//   ],
// }).catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PersonListComponent } from './app/person-list/person-list.component'; // Import your component

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(]), // your routing setup
    HttpClientModule, // Add HttpClientModule here
  ],
}).catch((err) => console.error(err));
