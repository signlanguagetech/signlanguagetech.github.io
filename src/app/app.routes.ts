import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { AppComponent } from './app.component';
import { VlogsComponent } from './vlogs/vlogs.component';

export const routes: Routes = [
    { path: 'counter', component: CounterComponent },
    { path: 'vlogs', component: VlogsComponent },
    // { path: 'home', component: AppComponent },
    { path: '', redirectTo: '/counter', pathMatch: 'full' },
];
