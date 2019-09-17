import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
// import { EqualValidator } from './equal-validator.directive';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TagInputModule } from 'ngx-chips';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutes } from './projects.routing';
import { ViewComponent } from './view/view.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProjectsRoutes),
        FormsModule, NgSelectModule, JWBootstrapSwitchModule, NgbModule, TagInputModule
    ],
    declarations: [ProjectsComponent, ViewComponent]
})

export class ProjectsModule {}