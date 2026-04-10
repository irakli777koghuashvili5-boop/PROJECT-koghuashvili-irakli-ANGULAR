import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule , CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
