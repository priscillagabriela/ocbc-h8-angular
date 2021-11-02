import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from 'src/app/users/list.component';

const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', loadChildren: usersModule },
    { path: 'users', loadChildren: usersModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }