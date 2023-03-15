import { RasskingComponent } from './rassking/rassking.component';
import { AboutComponent } from './about/about.component';
import { MemophotoComponent } from './memophoto/memophoto.component';
import { OriunComponent } from './oriun/oriun.component';
import { ProjectsComponent } from './projects/projects.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/oriun', component: OriunComponent },
  { path: 'projects/memophoto', component: MemophotoComponent },
  { path: 'projects/about', component: AboutComponent },
  { path: 'projects/rasskingball', component: RasskingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
