import { NgModule } from '@angular/core';
import { WorkflowLayoutComponent } from './workflow-layout/workflow-layout.component';
import { ContentMarginLayoutComponent } from './content-margin-layout/content-margin-layout.component';
import { FullWidthLayoutComponent } from './full-width-layout/full-width-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ContentMarginLayoutComponent,
    FullWidthLayoutComponent,
    WorkflowLayoutComponent
  ],
  exports: [
    ContentMarginLayoutComponent,
    FullWidthLayoutComponent,
    WorkflowLayoutComponent
  ]
})
export class LayoutModule { }
