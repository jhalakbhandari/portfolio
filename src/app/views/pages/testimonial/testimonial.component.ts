import { Component } from '@angular/core';
import { SupabaseService } from '../../../services/supabase.service';

@Component({
  selector: 'app-testimonial',
  // standalone: true,
  // imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
})
export class TestimonialComponent {
  testimonials: any[] = [];

  constructor(private supabase: SupabaseService) {}
  async submitTestimonial(name: string, message: string) {
    await this.supabase.addTestimonial(name, message);
    
    this.testimonials = await this.supabase.getTestimonials(); // Refresh
  }
  async ngOnInit() {
    this.testimonials = await this.supabase.getTestimonials();
  }
}
