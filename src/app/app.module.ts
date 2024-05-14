import { RasskingComponent } from './rassking/rassking.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MemophotoComponent } from './memophoto/memophoto.component';
import { OriunComponent } from './oriun/oriun.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { LoadScreenEndComponent } from './load-screen-end/load-screen-end.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    PresentationComponent,
    OriunComponent,
    MemophotoComponent,
    AboutComponent,
    LoadScreenComponent,
    LoadScreenEndComponent,
    HeaderComponent,
    RasskingComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
