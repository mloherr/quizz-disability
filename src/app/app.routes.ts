import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'quizz',
        loadComponent: () => import ('./components/quizz/quizz.component').then(response => response.QuizzComponent)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
