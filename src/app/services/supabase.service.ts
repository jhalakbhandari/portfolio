import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // Add testimonial
  async addTestimonial(name: string, message: string) {
    const { data, error } = await this.supabase
      .from('Testimonials')
      .insert([{ name, message }]);
    if (error) throw error;
    return data;
  }

  // Fetch testimonials
  async getTestimonials() {
    const { data, error } = await this.supabase
      .from('Testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  }
}
