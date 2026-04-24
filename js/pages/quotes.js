/**
 * Quotes Page
 */

export class QuotesPage {
  render() {
    return `
      <div class="quotes-container">
        <div class="flex justify-between items-center mb-6">
          <h2>KVA & Angebote</h2>
          <button class="btn btn-primary"><i data-lucide="plus"></i> Neuer KVA</button>
        </div>

        <div class="stats-row mb-8">
          <div class="stat-card">
            <div class="stat-info">
              <span class="stat-label">Gesamtvolumen (Offen)</span>
              <span class="stat-value">€ 45.200</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-info">
              <span class="stat-label">Genehmigungsrate</span>
              <span class="stat-value">92%</span>
            </div>
          </div>
        </div>

        <div class="card bg-white p-0 overflow-hidden">
          <table class="data-table">
            <thead>
              <tr>
                <th>KVA-Nr</th>
                <th>Projekt</th>
                <th>Kunde</th>
                <th>Betrag</th>
                <th>Status</th>
                <th>Datum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#KVA-992</td>
                <td>Social Media Package</td>
                <td>Solana Labs</td>
                <td>€ 2.450</td>
                <td><span class="badge badge-success">Genehmigt</span></td>
                <td>Gestern</td>
              </tr>
              <tr>
                <td>#KVA-991</td>
                <td>UX Audit & Research</td>
                <td>Global Logistics</td>
                <td>€ 5.800</td>
                <td><span class="badge badge-pending">Gesendet</span></td>
                <td>12.04.2024</td>
              </tr>
              <tr>
                <td>#KVA-990</td>
                <td>Naming & Strategy</td>
                <td>New Startup Inc.</td>
                <td>€ 8.200</td>
                <td><span class="badge">Entwurf</span></td>
                <td>10.04.2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}
