import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  // standalone: true,
  // imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  blogPosts: any[] = [];
  isLoading: boolean = true;
  nextPageToken: string | null = null; // Track the nextPageToken
  currentPage: number = 1;
  constructor(private route: ActivatedRoute, private router: Router) {}
  // Method to load the next page
  loadNextPage(): void {
    if (this.nextPageToken) {
      this.currentPage++;
      this.router.navigate([], {
        queryParams: { pageToken: this.nextPageToken },
        queryParamsHandling: 'merge', // Preserve other query params
      });
    }
  }

  // Method to load the previous page
  loadPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.router.navigate([], {
        queryParams: { pageToken: this.nextPageToken },
        queryParamsHandling: 'merge', // Preserve other query params
      });
    }
  }

  // Method to truncate content to 50 words
  truncateContent(content: string, wordLimit: number): string {
    if (!content) return '';
    const words = content.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : content;
  }

  // Method to remove HTML tags
  stripHtml(html: string): string {
    if (!html) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  }

  // getTagClass(tag: string): string {
  //   const pastelColors = [
  //     'bg-pink',
  //     'bg-lightblue',
  //     'bg-lightgreen',
  //     'bg-lavender',
  //     'bg-lightyellow',
  //     'bg-lightorange',
  //   ];
  //   const randomColor =
  //     pastelColors[Math.floor(Math.random() * pastelColors.length)];
  //   return randomColor;
  // }

  extractTags(labels: any): string[] {
    if (labels && typeof labels === 'object') {
      return Object.keys(labels); // Extract keys as tags
    }
    return []; // Return empty array if no tags
  }
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log('Resolved Data:', data);

      if (data['blogData'] && data['blogData'].items) {
        this.blogPosts = data['blogData'].items; // Assign blog posts
        this.nextPageToken = data['blogData'].nextPageToken || null; // Get nextPageToken
      }

      this.isLoading = false;
    });
  }
}
