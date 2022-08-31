import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faChevronLeft = faChevronLeft;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigateTo(route?: string): void {
    this.router.navigate([route]);
  }
}
