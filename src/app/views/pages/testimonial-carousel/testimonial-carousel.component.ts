import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../../services/supabase.service';

@Component({
  selector: 'app-testimonial-carousel',
  // standalone: true,
  // imports: [],
  templateUrl: './testimonial-carousel.component.html',
  styleUrl: './testimonial-carousel.component.css',
})
export class TestimonialCarouselComponent implements OnInit {
  testimonials: any[] = [];

  constructor(private supabase: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    this.testimonials = await this.supabase.getTestimonials();
  }
}
