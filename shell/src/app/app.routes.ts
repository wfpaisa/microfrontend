import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
    data: { nombre: 'Pespito', email: 'pespito@papas.com' },
  },
  {
    path: 'users2',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfe1',
        exposedModule: './FlightsComponent',
        // remoteEntry: './Component',
      }).then((m) => m.FlightsComponent),
  },
];
