import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

const routes: Routes = [
    {
        path: '',
        component: TablePageComponent,
    },
    {
        path: 'new-object',
        component: FormPageComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
