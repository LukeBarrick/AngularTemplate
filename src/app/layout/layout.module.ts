import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowLayoutComponent } from './workflow-layout/workflow-layout.component';
import { ContentMarginLayoutComponent } from './content-margin-layout/content-margin-layout.component';
import { FullWidthLayoutComponent } from './full-width-layout/full-width-layout.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
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
