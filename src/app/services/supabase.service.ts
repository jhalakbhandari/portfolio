import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://mhhfyedcfehfiqvyyrdb.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oaGZ5ZWRjZmVoZmlxdnl5cmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MjY3NDgsImV4cCI6MjA2MzUwMjc0OH0.vW4bZEPWz3fAbUx-AX2XPDws0E8g_eDZMcXiCAZ1c4I'
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
