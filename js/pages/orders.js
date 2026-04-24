/**
 * Orders Page
 */

export class OrdersPage {
  render() {
    return `
      <div class="orders-container">
        <div class="flex justify-between items-center mb-6">
          <h2>Alle Aufträge</h2>
          <button class="btn btn-primary"><i data-lucide="plus"></i> Neuer Auftrag</button>
        </div>

        <div class="filters-bar card bg-white flex gap-4 mb-6">
          <input type="text" class="form-control" placeholder="Nach Auftrag oder Kunde suchen...">
          <select class="form-control" style="width: auto;">
            <option>Alle Status</option>
            <option>Aktiv</option>
            <option>Wartet auf Feedback</option>
            <option>Dringend</option>
            <option>Abgeschlossen</option>
          </select>
        </div>

        <div class="card bg-white p-0 overflow-hidden">
          <table class="data-table">
            <thead>
              <tr>
                <th>Projekt-ID</th>
                <th>Auftrag</th>
                <th>Kunde</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#PS-2401</td>
                <td><strong>Brand Identity Refactor</strong></td>
                <td>Solana Labs</td>
                <td><span class="badge badge-active">In Arbeit</span></td>
                <td>28. April</td>
                <td><div class="avatar-group"><div class="avatar sm">MD</div></div></td>
              </tr>
              <tr>
                <td>#PS-2402</td>
                <td><strong>Web Design Mockup</strong></td>
                <td>Evergrow Corp</td>
                <td><span class="badge badge-pending">Feedback</span></td>
                <td>02. Mai</td>
                <td><div class="avatar-group"><div class="avatar sm">MD</div></div></td>
              </tr>
              <tr>
                <td>#PS-2403</td>
                <td><strong>Annual Report 2024</strong></td>
                <td>Global Logistics</td>
                <td><span class="badge badge-urgent">Dringend</span></td>
                <td>Morgen</td>
                <td><div class="avatar-group"><div class="avatar sm">JS</div></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}
