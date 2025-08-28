import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { NavbarComponent } from './views/layout/navbar/navbar.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { BlogComponent } from './views/pages/blog/blog.component';
import { CertificatesComponent } from './views/pages/certificates/certificates.component';
import { AppComponent } from './app.component';
import { EducationComponent } from './views/pages/education/education.component';
import { WorkComponent } from './views/pages/work/work.component';
import { ApiService } from './services/api/api.service';
import { UtilsService } from './services/utils/utils.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BlogModule } from './views/pages/blog/blog.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TestimonialComponent } from './views/pages/testimonial/testimonial.component';
import { TestimonialModule } from './views/pages/testimonial/testimonial.module';
import { TestimonialCarouselComponent } from './views/pages/testimonial-carousel/testimonial-carousel.component';
import { ProjectsComponent } from './views/pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
    HomeComponent, // Declare HomeComponent
    NavbarComponent, // Declare NavbarComponent
    FooterComponent, // Declare FooterComponent
    TestimonialCarouselComponent,
    ProjectsComponent,
    //BlogComponent, // Declare BlogComponent
    // CertificatesComponent, // Declare CertificatesComponent
    EducationComponent, // Declare EducationComponent
    WorkComponent,
  ],
  imports: [
    BrowserModule, // Import BrowserModule
    AppRoutingModule, // Import AppRoutingModule
    RouterModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    BlogModule,
    FormsModule,
    TestimonialModule,
  ],
  providers: [ApiService, UtilsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
