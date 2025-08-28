import { Component } from '@angular/core';
import * as projectsData from '../../../../assets/data/projects.json';
import { HttpClient } from '@angular/common/http';

export interface Project {
  title: string;
  imageUrl: string;
  tech: string[];
  projectLink: string;
  githubLink: string;
  description: string;
  [key: string]: any; // allows dynamic keys
}

@Component({
  selector: 'app-projects',
  // standalone: true,
  // imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [];
  selectedProject: Project | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Project[]>('assets/data/projects.json').subscribe((data) => {
      this.projects = data;
    });
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  openModal(project: Project) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}
