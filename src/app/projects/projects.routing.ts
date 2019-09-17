import { Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ViewComponent } from './view/view.component';


export const ProjectsRoutes: Routes = [{
    path: '',
    children: [{
        path: 'projects/management',
        component: ProjectsComponent
    },{
        path: 'projects/:id',
        component: ViewComponent
    }]
}];
