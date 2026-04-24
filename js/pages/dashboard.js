/**
 * Dashboard Page
 */

export class DashboardPage {
  render() {
    return `
      <div class="dashboard-grid">
        <!-- Stats Cards -->
        <section class="stats-row">
          <div class="stat-card">
            <div class="stat-icon bg-psalms-red"><i data-lucide="briefcase"></i></div>
            <div class="stat-info">
              <span class="stat-label">Aktive Aufträge</span>
              <span class="stat-value">12</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon bg-warning"><i data-lucide="clock"></i></div>
            <div class="stat-info">
              <span class="stat-label">Offene Korrekturen</span>
              <span class="stat-value">5</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon bg-success"><i data-lucide="check-circle"></i></div>
            <div class="stat-info">
              <span class="stat-label">Genehmigte KVAs</span>
              <span class="stat-value">8</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon bg-info"><i data-lucide="users"></i></div>
            <div class="stat-info">
              <span class="stat-label">Neue Kunden</span>
              <span class="stat-value">3</span>
            </div>
          </div>
        </section>

        <!-- Recent Orders Section -->
        <section class="recent-orders mt-8">
          <div class="section-header flex justify-between items-center mb-4">
            <h3>Aktuelle Aufträge</h3>
            <a href="#/auftraege" class="btn btn-ghost text-psalms-red">Alle ansehen</a>
          </div>
          
          <div class="card bg-white rounded-lg shadow-sm overflow-hidden">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Auftrag</th>
                  <th>Kunde</th>
                  <th>Status</th>
                  <th>Deadline</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Brand Identity Refactor</strong></td>
                  <td>Solana Labs</td>
                  <td><span class="badge badge-active">In Arbeit</span></td>
                  <td>28. April</td>
                  <td class="text-right"><i data-lucide="more-horizontal"></i></td>
                </tr>
                <tr>
                  <td><strong>Web Design Mockup</strong></td>
                  <td>Evergrow Corp</td>
                  <td><span class="badge badge-pending">Wartet auf Feedback</span></td>
                  <td>02. Mai</td>
                  <td class="text-right"><i data-lucide="more-horizontal"></i></td>
                </tr>
                <tr>
                  <td><strong>Annual Report 2024</strong></td>
                  <td>Global Logistics</td>
                  <td><span class="badge badge-urgent">Dringend</span></td>
                  <td>Morgen</td>
                  <td class="text-right"><i data-lucide="more-horizontal"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    `;
  }
}
