import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: '/pages/welcome',
        pathMatch: 'full',
      },{
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },{
            path: '',
            loadChildren: './userpage/user.module#UserModule'
        },{
            path: '',
            loadChildren: './calendar/calendar.module#CalendarModule'
        },{
            path: '',
            loadChildren: './widgets/widgets.module#WidgetsModule'
        },{
            path: '',
            loadChildren: './issues/issues.module#IssuesModule'
        },{
            path: '',
            loadChildren: './notebook/notebook.module#NotebookModule'
        },{
            path: '',
            loadChildren: './meeting-assistant/meeting-assistant.module#MeetingAssistantModule'
        },{
            path: '',
            loadChildren: './document-manager/document-manager.module#DocumentManagerModule'
        },{
            path: '',
            loadChildren: './reporting-assistant/reporting-assistant.module#ReportingAssistantModule'
        },{
            path: '',
            loadChildren: './market-place/market-place.module#MarketPlaceModule'
        },{
            path: '',
            loadChildren: './messages/messages.module#MessagesModule'
        },{
            path: '',
            loadChildren: './projects/projects.module#ProjectsModule'
        },{
            path: '',
            loadChildren: './company/company.module#CompanyModule',
        }
    ]},
    {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        },{
            path: '',
            loadChildren: './departmental-rpts/departmental-rpts.module#DepartmentalRptsModule'
        },]
   }

];