import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BlogComponent } from './views/pages/blog/blog.component';
import { CertificatesComponent } from './views/pages/certificates/certificates.component';
import { BlogResolverService } from './views/pages/blog/blog-resolver.service';
import { TestimonialComponent } from './views/pages/testimonial/testimonial.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'certificate',
    component: CertificatesComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
    resolve: {
      blogData: BlogResolverService,
    },
  },
  {
    path: 'testimonial',
    component: TestimonialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
