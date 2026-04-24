/**
 * SPA Router
 */

import { DashboardPage } from './pages/dashboard.js';
import { UploadPage } from './pages/upload.js';
import { CorrectionsPage } from './pages/corrections.js';
import { OrdersPage } from './pages/orders.js';
import { QuotesPage } from './pages/quotes.js';
import { PortfolioPage } from './pages/portfolio.js';

export class Router {
  constructor() {
    this.routes = {
      '/': () => new DashboardPage().render(),
      '/auftraege': () => new OrdersPage().render(),
      '/upload': () => new UploadPage().render(),
      '/korrekturen': () => new CorrectionsPage().render(),
      '/kva': () => new QuotesPage().render(),
      '/portfolio': () => new PortfolioPage().render(),
      '/kunden': () => this.renderPlaceholder('Kunden'),
      '/settings': () => this.renderPlaceholder('Einstellungen'),
    };

    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const renderFunc = this.routes[hash] || this.routes['/'];
    
    const pageView = document.getElementById('page-view');
    if (pageView) {
      pageView.innerHTML = renderFunc();
      
      // Trigger icon refresh
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  }

  renderPlaceholder(title) {
    return `
      <div class="placeholder-page">
        <h2 class="mb-4">${title}</h2>
        <div class="card p-8 text-center bg-white rounded-lg shadow-sm">
          <p class="text-gray-500">Diese Sektion wird gerade implementiert...</p>
        </div>
      </div>
    `;
  }
}
