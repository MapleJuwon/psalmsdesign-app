/**
 * Portfolio Page
 */

export class PortfolioPage {
  render() {
    return `
      <div class="portfolio-container">
        <div class="flex justify-between items-center mb-6">
          <h2>Portfolio-Archiv</h2>
          <div class="flex gap-2">
            <button class="btn btn-ghost active">Alle</button>
            <button class="btn btn-ghost">Web</button>
            <button class="btn btn-ghost">Branding</button>
            <button class="btn btn-ghost">Print</button>
          </div>
        </div>

        <div class="portfolio-grid">
          <div class="portfolio-item card">
            <div class="portfolio-thumb bg-gray-200"></div>
            <div class="portfolio-info mt-4">
              <h5>Solana Branding</h5>
              <span class="text-gray-500">2024 • Corporate Identity</span>
            </div>
          </div>
          <div class="portfolio-item card">
            <div class="portfolio-thumb bg-gray-200"></div>
            <div class="portfolio-info mt-4">
              <h5>Evergrow Website</h5>
              <span class="text-gray-500">2023 • Web Design</span>
            </div>
          </div>
          <div class="portfolio-item card">
            <div class="portfolio-thumb bg-gray-200"></div>
            <div class="portfolio-info mt-4">
              <h5>Annual Logistics</h5>
              <span class="text-gray-500">2023 • Editorial</span>
            </div>
          </div>
          <div class="portfolio-item card">
            <div class="portfolio-thumb bg-gray-200"></div>
            <div class="portfolio-info mt-4">
              <h5>Rebranding Pulse</h5>
              <span class="text-gray-500">2024 • Logo Design</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
