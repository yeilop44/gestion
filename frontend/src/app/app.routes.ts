import { Routes, RouterModule } from '@angular/router';
import { ProcesosComponent } from './components/procesos/procesos.component'
import { IndicadoresComponent } from './components/indicadores/indicadores.component';

export const appRoutes: Routes = [
    { path: 'procesos', component: ProcesosComponent },
    { path: 'indicadores', component: IndicadoresComponent },
    {path: '', pathMatch: 'full', redirectTo: 'procesos'},
    { path: '**', component: ProcesosComponent }

];



export const app_routing = RouterModule.forRoot(appRoutes, )