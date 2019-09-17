import { Routes } from '@angular/router';

import { CompanyComponent } from './company.component';
import { EnterpriseProfileComponent } from './enterprise-profile/enterprise-profile.component';
import { EnterpriseViewComponent } from './enterprise-view/enterprise-view.component';
import { NewComponent } from './new/new.component';

// Component added 02-July-19 by VJ Sibanda.

export const CompanyRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'enterprises/company-register',
            component: CompanyComponent
        },{
            path: 'enterprises/enterprise-view',
            component: EnterpriseViewComponent
        },{
            path: 'enterprises/:id',
            component: EnterpriseProfileComponent
        },{
            path: 'moses/new',
            component: NewComponent
        }
    ]
}];
 