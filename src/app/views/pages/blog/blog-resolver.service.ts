import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from './blog.service';

@Injectable({
  providedIn: 'root',
})
export class BlogResolverService implements Resolve<any> {
  constructor(private blogService: BlogService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const pageToken = route.queryParams['pageToken'] || null; // Get pageToken from query params
    let url =
      'https://www.googleapis.com/blogger/v3/blogs/1801325881103340649/posts?key=AIzaSyBQ5FPWOCw28FJsx2cgerx7TjmfLigtf3M';

    if (pageToken) {
      url += `&pageToken=${pageToken}`; // Append pageToken to the URL
    }

    return this.blogService.get(url); // Fetch blog posts
  }
}
