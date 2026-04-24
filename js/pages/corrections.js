/**
 * Corrections Page
 */

export class CorrectionsPage {
  render() {
    return `
      <div class="corrections-container">
        <div class="flex justify-between items-center mb-6">
          <h2>Korrekturen & Feedback</h2>
          <div class="flex gap-2">
            <select class="form-control" style="width: auto;">
              <option>Alle Projekte</option>
              <option>Solana Labs</option>
              <option>Evergrow Corp</option>
            </select>
          </div>
        </div>

        <div class="kanban-board">
          <!-- Column: Offen -->
          <div class="kanban-column">
            <div class="column-header">
              <h4>Offen</h4>
              <span class="count">3</span>
            </div>
            <div class="column-cards">
              <div class="card feedback-card mb-4">
                <div class="priority-tag high">Hoch</div>
                <p class="feedback-text">"Der Rot-Ton im Logo ist zu dunkel. Bitte mehr Korall-Rot (#E15252) verwenden."</p>
                <div class="feedback-footer mt-4">
                  <span class="project-tag">Solana Labs</span>
                  <button class="btn-icon"><i data-lucide="arrow-right"></i></button>
                </div>
              </div>
              <div class="card feedback-card mb-4">
                <div class="priority-tag medium">Mittel</div>
                <p class="feedback-text">"Abstand zwischen Headline und Subline verringern."</p>
                <div class="feedback-footer mt-4">
                  <span class="project-tag">Evergrow Website</span>
                  <button class="btn-icon"><i data-lucide="arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>

          <!-- Column: In Arbeit -->
          <div class="kanban-column">
            <div class="column-header">
              <h4>In Arbeit</h4>
              <span class="count">1</span>
            </div>
            <div class="column-cards">
              <div class="card feedback-card mb-4">
                <div class="priority-tag medium">Mittel</div>
                <p class="feedback-text">"Icons im Footermenü auf Outlined-Style umstellen."</p>
                <div class="feedback-footer mt-4">
                  <span class="project-tag">Global Logistics</span>
                  <button class="btn-icon"><i data-lucide="check"></i></button>
                </div>
              </div>
            </div>
          </div>

          <!-- Column: Erledigt -->
          <div class="kanban-column">
            <div class="column-header">
              <h4>Erledigt</h4>
              <span class="count">12</span>
            </div>
            <div class="column-cards">
              <div class="card feedback-card opacity-50">
                <p class="feedback-text">"Schriftart auf Inter umstellen."</p>
                <div class="feedback-footer mt-4">
                  <span class="project-tag">Evergrow Corp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
