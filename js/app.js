/**
 * PsalmsDesign App - Main Entry
 */

import { Router } from './router.js';

class App {
  constructor() {
    this.router = new Router();
    this.init();
  }

  init() {
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Navigation Active State Management
    window.addEventListener('hashchange', () => this.updateActiveNavItem());
    this.updateActiveNavItem();

    console.log('PsalmsDesign App initialized');
  }

  updateActiveNavItem() {
    const hash = window.location.hash || '#/';
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === hash) {
        item.classList.add('active');
        // Update header title based on link text
        const title = item.querySelector('span')?.textContent;
        if (title) document.getElementById('page-title').textContent = title;
      } else {
        item.classList.remove('active');
      }
    });

    // Re-initialize icons for newly injected content
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
