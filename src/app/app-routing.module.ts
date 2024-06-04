import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkflowLayoutComponent } from './layout/workflow-layout/workflow-layout.component';
import { LoginComponent } from './feature/pages/login/login.component';
import { FullWidthLayoutComponent } from './layout/full-width-layout/full-width-layout.component';
import { SplashComponent } from './feature/pages/splash/splash.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { ContentMarginLayoutComponent } from './layout/content-margin-layout/content-margin-layout.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: '',
    component: WorkflowLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  {
    path: '',
    component: FullWidthLayoutComponent,
    children: [{ path: 'splash', component: SplashComponent }],
  },
  {
    path: '',
    component: ContentMarginLayoutComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
