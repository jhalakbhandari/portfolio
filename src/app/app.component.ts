import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FooterComponent } from './views/layout/footer/footer.component';
// import { NavbarComponent } from './views/layout/navbar/navbar.component';
// import { HomeComponent } from './views/pages/home/home.component';
@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'penguinportfolio';
  ngOnInit(): void {}
}
