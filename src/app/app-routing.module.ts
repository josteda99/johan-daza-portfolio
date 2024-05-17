import { GalleryComponent } from './gallery/gallery.component';
import { RasskingComponent } from './rassking/rassking.component';
import { AboutComponent } from './about/about.component';
import { MemophotoComponent } from './memophoto/memophoto.component';
import { OriunComponent } from './oriun/oriun.component';
import { ProjectsComponent } from './projects/projects.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullGalleryComponent } from './full-gallery/full-gallery.component';
import { VideogamesComponent } from './videogames/videogames.component';
import { AppsComponent } from './apps/apps.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/about', component: AboutComponent },
  { path: 'projects/gallery', component: GalleryComponent },
  { path: 'projects/full-gallery', component: FullGalleryComponent },
  { path: 'projects/videogames', component: VideogamesComponent },
  { path: 'projects/apps', component: AppsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
